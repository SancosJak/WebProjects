import React from 'react';
import './App.css';
import Counter from './features/counter/Counter';
import Sandwich from './features/sandwich/Sandwich';
import TaskCreation from './features/tasks/TaskCreation';
import Tasks from './features/tasks/Tasks';

function App(): JSX.Element {
  return (
    <div>
      <Counter />
      <Sandwich />
      <TaskCreation />
      <Tasks />
    </div>
  );
}

export default App;
