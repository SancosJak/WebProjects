import { combineReducers, createStore } from 'redux';
import counterReducer from './features/counter/CounterReducer';
import SandwichReducer from './features/sandwich/SandwichReducer';
import tasksReducer from './features/tasks/TasksReducer';

// здесь имена других фич и ссылка на редюсеры
const store = createStore(
  combineReducers(
  {
    counter: counterReducer,
    sandwich: SandwichReducer,
    tasks: tasksReducer
  }
));

export default store;

export type RootState = ReturnType<typeof store.getState>;
