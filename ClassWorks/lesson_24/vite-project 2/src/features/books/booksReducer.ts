import { uid } from 'uid';
import Action from './types/Action';
import BooksState from './types/BooksState';

const initialState: BooksState = {
  books: [
    {
      id: '1', title: 'Code da Vinci', year: 2008, author: 'Dan Brown'
    },
    {
      id: '2', title: 'Think and Grow Rich', year: 2005, author: 'Napoleon Hill'
    }
  ],
};

export default function booksReducer(
  state: BooksState = initialState,
  action: Action
): BooksState {
  switch (action.type) {
    case 'books/add':
      return {
        ...state,
        books: [...state.books, { id: uid(), ...action.payload }]
      };
    case 'books/delete':
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload)
      };
    case 'books/editTitle':
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id
            ? { ...book, title: action.payload.title }
            : book
        )
      };
    default:
      return state;
  }
}
