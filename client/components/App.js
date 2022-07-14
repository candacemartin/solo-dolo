import React, { Component } from 'react';
import { useState } from 'react';
//import './scss/application.scss';

function FilterableShroomTable({ shrooms }) {
  return (
    <div>
      <div>
       <SearchBar />
      </div>
      <div className='board'>
        <ShroomTable shrooms={shrooms} />
      </div>
    </div>
    
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
    category: 'non-psychedelic',
    benefits: ['test', 'test'],
    image: [],
    name: 'maitake',
  },
  {
    category: 'non-psychedelic',
    benefits: ['test', 'test'],
    image: [],
    name: "lion's mane",
  },
  {
    category: 'non-psychedelic',
    benefits: ['test', 'test'],
    image: [],
    name: 'cordyceps',
  },
  {
    category: 'psychedelic',
    benefits: ['test', 'test'],
    image: ['client/images/golden_teachers.jpeg'],
    name: 'golden teacher',
  },
  {
    category: 'psychedelic',
    benefits: ['test', 'test'],
    image: [],
    name: 'liberty caps',
  },
  {
    category: 'psychedelic',
    benefits: ['test', 'test'],
    image: [],
    name: 'B+',
  },
];

export default function App() {
  return <FilterableShroomTable shrooms={SHROOMS} />;
}
