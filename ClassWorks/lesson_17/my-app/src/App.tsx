import React from 'react';
// import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import Counter from './Components/Counter/counter';
import Coctail from './Components/Coctail/Coctail';
import Layout from './Components/Layout/Layout';
import Home from './Home/Home';
import Activity from './Components/BoredapiHW/HW_edition';

function App(): JSX.Element {
  return (
  <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/activity" element={<Activity />} />
    <Route path="/counter" element={<Counter />} />
    <Route path="/coctail" element={<Coctail />} />
    </Route>
  </Routes>
);
}

        /* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */

export default App;
