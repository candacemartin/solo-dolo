import React, { Component } from 'react';
import { useState } from 'react';
//import './scss/application.scss';

function FilterableShroomTable({ shrooms }) {

  return (
    <div>
      <div className='outerbox'>
        <Problem />
        <Solution />
        <TechnicalChallengeOne />
        <TechnicalChallengeTwo />
        <TechnicalChallengeThree />
      </div>
        <SearchBar />
        <Button />
      <div>
      </div>
      <div className='newCardBoxes'>
        <NewCardOne />
        <NewCardTwo />
      </div>
      <div className='existingRecordsBox'>
        <ShroomTable shrooms={shrooms} />
      </div>
    </div>
    
  );
}

function Problem() {
  return (
    <div>
      <h1>what's the problem?</h1>
      <p className='prob1'>1. medicinal mushrooms are fun to grow at home and have amazing health benefits<br />2. there are tons of apps for identifying mushrooms, but no good home cultivation guides/trackers </p>
    </div>
  )
}

function Solution() {
  return (
    <div>
      <h1>what's the solution?</h1>
      <p className='prob1'> *GROW ADVICE* kinokogrow.io will help you answer all the tough questions you encounter in your grow process (what substrate should i use? what are the ideal fruiting conditions?) 
      <br />
      <br />*GROW TRACKING* successul mushroom cultivation is a truly iterative process! kinokogrow.io will help you keep track of all the details batch by batch.</p>
    </div>
  )
}

function TechnicalChallengeOne() {
  return (
    <button style={ {background: 'cadetblue'} } onClick={() => {
      console.log('WEBPACK CONFIG, of course.')
      return(
        <div>
          <NewCardOne />
        </div>
      )
    }}>tech challenge 1</button>
  );
}

function TechnicalChallengeTwo() {
  return (
    <button style={{background: 'darkcyan'}} onClick={() => {
      console.log('was very confused by the REACT part--it took me a long time to get these divs/buttons on the screen and these console logs feel like a miracle tbh.')
      return(
        <div>
          <NewCardOne />
        </div>
      )
    }}>tech challenge 2</button>
  );
}

function TechnicalChallengeThree() {
  return (
    <button style={{background: 'lightslategray'}} onClick={() => {
      console.log('persisting DATA--i tried a postgres db but could not get it to link up with buttons. i also tried to mess with redux/store, but got a bit turned around. data in green box is hardcoded lol :)')
      return(
        <div>
          <NewCardOne />
        </div>
      )
    }}>tech challenge 3</button>
  );
}

function NewCardOne() {
  console.log('new grow 1 rendered');
  return (
    <div className='newCardBox'>
      <p>you started growing reishi
        <br />on 7-14-2022
        <br />in hardwood sawdust substrate
      </p>
      
    </div>
  )
}

function NewCardTwo() {
  console.log('new grow 2 rendered');
  return (
    <div className='newCardBox'>
      <p>you started growing cordyceps militaris
        <br />on 7-13-2022
        <br />in brown rice substrate
      </p>
      
    </div>
  )
}


//search bar:
function SearchBar() {
  return (
    <form>
      <input
        type='text'
        //value={filterText}
        placeholder='someday will work...'
      />
      <label>
        <input
          type='checkbox'
          //checked={inStockOnly}
        />{' '}
        only show shrooms with images
      </label>
    </form>
  );
}

//blue button for adding new grows:

function Button(){
  return (
    <button className='firstButton' onClick={() => {
      console.log('you clicked addCard')
      return(
        <div>
          <NewCardOne />
        </div>
      )
    }}>Grow Something New! (won't add anything yet tho)</button>
  );
}

//static data box
function ShroomCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan='2'>{category}</th>
    </tr>
  );
}

function ShroomRow({ shroom }) {
  const name = 
    <div >
      {shroom.name}
    </div>;
  return (
    <tr>
      <td>{name}</td>
      <td>{shroom.benefits}</td>
    </tr>
  );
}

function ShroomTable({ shrooms }) {
  const rows = [];
  let lastCategory = null;

  shrooms.forEach((shroom) => {
    if (shroom.category !== lastCategory) {
      rows.push(
        <ShroomCategoryRow category={shroom.category} key={shroom.category} />
      );
    }
    rows.push(<ShroomRow shroom={shroom} key={shroom.name} />);
    lastCategory = shroom.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>benefits</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

const SHROOMS = [
  {
    category: '',
    benefits: ['mush ', 'rooms'],
    image: [],
    name: 'cordyceps',
    psychedelic: false
  },
  {
    category: '',
    benefits: ['cured', '  me', ' test'],
    image: [],
    name: "lion's mane",
    psychedelic: false
  },
  {
    category: '',
    benefits: ['jk not evaluated by FDA'],
    image: [],
    name: 'maitake',
    psychedelic: false
  },
  {
    category: '',
    benefits: ['test', '' ],
    image: ['test', 'test'],
    name: 'reishi',
    psychedelic: false
  },
  {
    category: '',
    benefits: ['test', 'test'],
    image: [],
    name: 'oyster',
    psychedelic: false
  },
  {
    category: '',
    benefits: ['happy'],
    image: [],
    name: 'golden teacher',
    psychedelic: false
  },
];

export default function App() {
  return <FilterableShroomTable shrooms={SHROOMS} />;
}
