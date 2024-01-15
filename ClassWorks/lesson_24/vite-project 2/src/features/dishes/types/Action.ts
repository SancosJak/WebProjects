import Dish, { DishID } from './Dish';

type Action = 
    | { type: 'dishes/create', payload: Dish }
    | { type: 'dishes/delete', payload: DishID }
    | { type: 'dishes/edit', payload: Dish }

export default Action;
