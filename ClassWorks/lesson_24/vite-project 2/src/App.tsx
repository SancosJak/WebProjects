import Counter from './features/counter/Counter';
import './App.css';
import Sandwich from './features/sandwich/Sandwich';
import TaskCreation from './features/tasks/taskCreation';
import Tasks from './features/tasks/Tasks';
import MovieCreation from './features/movies/MovieCreation';
import Movies from './features/movies/Movies';
import StudentCreation from './features/students/StudentCreation';
import Students from './features/students/Student';
import DishesList from './features/dishes/DishesList';
import DishForm from './features/dishes/dishForm';
import CartoonCreation from './features/cartoons/CartoonCreation';
import Cartoons from './features/cartoons/Cartoons';

function App():JSX.Element {
  return (
    <div>
      <Counter />
      <Sandwich />
      <Tasks />
      <TaskCreation />
      <MovieCreation />
      <Movies />
      <StudentCreation />
      <Students />
      <DishForm />
      <DishesList />
      <CartoonCreation />
      <Cartoons />
    </div>
  );
}

export default App;
