import React from 'react';
import Child from '../Child/Child';
import FlowerCard from './FlowerCard';

export default function ParentHW(): JSX.Element {
  const pirate = { name: 'John', age: 37 };
  const rose = {
    title: 'Rose',
    family: 'Rosaceae',
    color: 'red',
    price: 5.99
  };

  const orchid = {
    title: 'Orchid',
    family: 'Orchidaceae',
    color: 'purple',
    price: 19.99
  };

  return (
    <div>
      <Child pirat={pirate} />
      <FlowerCard flower={rose} />
      <FlowerCard flower={orchid} />
    </div>
  );
}
