import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sandwich from './Sandwich/Sandwich';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Sandwich />
  </React.StrictMode>
);
