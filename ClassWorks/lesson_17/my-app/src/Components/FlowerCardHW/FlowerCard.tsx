import React from 'react';

interface Flower {
  color: string;
  title: string;
  family: string;
  price: number;
}

interface Props {
  flower: Flower
}

export default function FlowerCard(props: Props): JSX.Element {
  const { flower } = props;
  const {
 color, title, family, price
} = flower;
  return (
    <div>
      <h2>Flower`s card {title}</h2>
      <p>Family: {family}</p>
      <p>Price: {price}</p>
      <p style={{ backgroundColor: color }}>Color: {color}</p>
    </div>
  );
}
