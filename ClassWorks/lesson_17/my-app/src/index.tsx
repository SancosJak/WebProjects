import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CityPage from './CityPage/CityPage';
import Counter from './Counter/counter';
import Sandwich from './Sandwich/Sandwich';
import Car from './Car/Car';
import Fruit from './Fruits/Fruits';
import Parent from './Parent/Parent';
import ParentHW from './FlowerCardHW/ParentHW';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <CityPage />
    <Counter />
    <Sandwich />
    <Car color="red" brand="BMW" />
    <Car color="blue" brand="Mercedes" />
    <Car color="green" brand="Audi" />
    <Car color="yellow" brand="Volvo" />
    <Car color="black" brand="Tesla" />
    <Car color="green" brand="Suzuki" />
    <Fruit title="Желтый банан" color="yellow" weight={2500} />
    <Fruit title="Зеленое яблоко" color="green" weight={1000} />
    <Fruit title="Красное яблоко" color="red" weight={2000} />
    <Parent />
    <ParentHW />
  </React.StrictMode>
);
