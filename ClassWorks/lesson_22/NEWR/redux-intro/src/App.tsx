import React from 'react';
import './App.css';
import Counter from './features/counter/Counter';
import Sandwich from './features/sandwich/Sandwich';
import TaskCreation from './features/tasks/TaskCreation';
import Tasks from './features/tasks/Tasks';
import MovieCreation from './features/movies/MovieCreation';
import Movies from './features/movies/Movies';
import CreateBook from './features/books/CreateBook';
import BooksPage from './features/books/BooksPage';

function App(): JSX.Element {
  return (
    <div>
      <Counter />
      <Sandwich />
      <TaskCreation />
      <Tasks />
      <CreateBook />
      <BooksPage />
      <MovieCreation />
      <Movies />
    </div>
  );
}

export default App;
