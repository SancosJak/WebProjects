import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // <React.StrictMode>
  //   <BoredapiInfo />
  //   <Coctail />
  //   <RandomDog />
  //   <Playground />
  //   <App />
  //   <CityPage />
  //   <Counter />
  //   <Sandwich />
  //   <Car color="red" brand="BMW" />
  //   <Car color="blue" brand="Mercedes" />
  //   <Car color="green" brand="Audi" />
  //   <Car color="yellow" brand="Volvo" />
  //   <Car color="black" brand="Tesla" />
  //   <Car color="green" brand="Suzuki" />
  //   <Fruit title="Желтый банан" color="yellow" weight={2500} />
  //   <Fruit title="Зеленое яблоко" color="green" weight={1000} />
  //   <Fruit title="Красное яблоко" color="red" weight={2000} />
  //   <Parent />
  //   <ParentHW />
  // </React.StrictMode>
);
