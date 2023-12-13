import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CityPage from './CityPage/CityPage';
import Counter from './Counter/counter';
import Sandwich from './Sandwich/Sandwich';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <CityPage />
    <Counter />
    <Sandwich />

  </React.StrictMode>
);
