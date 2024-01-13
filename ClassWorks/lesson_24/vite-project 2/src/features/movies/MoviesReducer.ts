import { uid } from 'uid';
import Action from './types/Action';
import Movie from './types/Movies';

type MoviesState = Movie[];

const initialState: MoviesState = [
  {
    id: uid(),
    title: 'Avatar',
    genre: 'Фантастика',
    country: 'США',
    releaseDate: '2009-12-15',
  },
];

export default function moviesReducer(
  state: MoviesState = initialState,
  action: Action
): MoviesState {
  switch (action.type) {
    case 'movies/add':
      return [...state, { ...action.payload, id: uid() }];
    case 'movies/delete':
      return state.filter((movie) => movie.id !== action.payload);
    case 'movies/editTitle':
      return state.map((movie) =>
        movie.id === action.payload.id
          ? { ...movie, title: action.payload.newTitle }
          : movie
      );
    default:
      return state;
  }
}
