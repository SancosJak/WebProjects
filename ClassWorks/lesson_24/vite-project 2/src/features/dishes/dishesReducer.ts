import Dish from './types/Dish';
import Action from './types/Action';
import { uid } from 'uid';

const initialState: Dish[] = [
    {
        id:uid(),
        title: 'Салат Цезарь',
        category: 'Салаты',
        price: 3,
        image: 'https://get.pxhere.com/photo/table-restaurant-dish-meal-food-salad-green-pepper-produce-vegetable-natural-menu-plate-fresh-gourmet-healthy-snack-lunch-cuisine-delicious-lettuce-tomato-eating-nutrition-dinner-tasty-vegetarian-diet-organic-appetizer-leaf-vegetable-spinach-salad-1289471.jpg'
    }
];

export default function dishesReducer(
    state: Dish[] = initialState,
    action: Action
  ): Dish[] {
    switch (action.type) {
      case 'dishes/create':
        return [...state, { ...action.payload, id: uid() }];
      case 'dishes/delete':
        return state.filter((dish) => dish.id !== action.payload);
      case 'dishes/edit':
        return state.map((dish) =>
          dish.id === action.payload.id ? action.payload : dish
        );
      default:
        return state;
    }
}