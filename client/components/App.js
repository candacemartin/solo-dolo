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
        <Button>Add Card</Button>
      <div>
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
      <p>medicinal mushrooms are fun to grow at home and have amazing health benefits<br />there are tons of apps for identifying mushrooms, but no good home cultivation guides/trackers </p>
    </div>
  )
}

function Solution() {
  return (
    <div>
      <h1>what's the solution?</h1>
      <p>GROW ADVICE: kinokogrow.io will help you answer all the tough questions you encounter in your grow process (what substrate should i use? what are the ideal fruiting conditions?) <br />GROW TRACKING: successul mushroom cultivation is a truly iterative process! kinokogrow.io will help you keep track of all the details batch by batch.</p>
    </div>
  )
}

function TechnicalChallengeOne() {
  return (
    <button onClick={() => {
      console.log('WEBPACK CONFIG, of course.')
      return(
        <div>
          <NewCard />
        </div>
      )
    }}>tech challenge 1</button>
  );
}

function TechnicalChallengeTwo() {
  return (
    <button onClick={() => {
      console.log('was very confused by the REACT part--it took me a long time to get these buttons on the screen and these console logs feel like a miracle tbh.')
      return(
        <div>
          <NewCard />
        </div>
      )
    }}>tech challenge 2</button>
  );
}

function TechnicalChallengeThree() {
  return (
    <button onClick={() => {
      console.log('persisting DATA--i tried a postgres db and also tried to mess with redux/store, but got lost with both. what you see in green box is hard coded lol :)')
      return(
        <div>
          <NewCard />
        </div>
      )
    }}>tech challenge 3</button>
  );
}

function NewCard() {
  console.log('new card should render');
  return (
    <div className='newCardBox'>
      this is just a box
    </div>
  )
}

function Button(){
  return (
    <button onClick={() => {
      console.log('you clicked addCard')
      return(
        <div>
          <NewCard />
        </div>
      )
    }}>add card button</button>
  );
}



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

function SearchBar() {
  return (
    <form>
      <input
        type='text'
        //value={filterText}
        placeholder='Search...'
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

const SHROOMS = [
  {
    category: '',
    benefits: ['test', 'test'],
    image: [],
    name: 'maitake',
    psychedelic: false
  },
  {
    category: '',
    benefits: ['test', 'test'],
    image: [],
    name: "lion's mane",
    psychedelic: false
  },
  {
    category: '',
    benefits: ['test', 'test'],
    image: [],
    name: 'cordyceps',
    psychedelic: false
  },
  {
    category: '',
    benefits: ['test', 'test'],
    image: ['client/images/golden_teachers.jpeg'],
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
    benefits: ['test', 'test'],
    image: [],
    name: 'golden teacher',
    psychedelic: false
  },
];

export default function App() {
  return <FilterableShroomTable shrooms={SHROOMS} />;
}
