import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function CartoonCreation(): JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const today = new Date().toISOString().substring(0, 10);
  const [releaseDate, setReleaseDate] = useState<string>(today);
  const [error, setError] = useState<string>('');

  const dispatch = useDispatch();
  function clearInputsAndError(): void {
    setCountry('');
    setGenre('');
    setReleaseDate(today);
    setTitle('');
    setError('');
  }

  function validateInputs(): boolean {
    if (title.trim() === '') {
      setError('Нужно ввести название мультика');
      return false;
    }
    if (genre.trim() === '') {
      setError('Нужно выбрать жанр мультика');
      return false;
    }
    if (country.trim() === '') {
      setError('Нужно выбрать страну');
      return false;
    }
    return true;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (validateInputs()) {
      dispatch({
        type: 'cartoons/add',
        payload: {
          title, genre, country, releaseDate
        }
      });
      clearInputsAndError();
    }
  }
  return (
    <div>
      <h1>Форма создания мультика</h1>
      <form onSubmit={handleSubmit}>
        {error && (<div style={{ color: 'red' }}>{error}</div>)}
        <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <select name="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="" disabled selected>Жанр</option>
          <option value="USSR cartoons">Советские мультфильмы</option>
          <option value="USA cartoons">Американские мультфильмы</option>
          <option value="Anime">Аниме</option>
          <option value="Disney">Диснеи</option>
        </select>
        <input type="text" placeholder="country" value={country} onChange={(e) => setCountry(e.target.value)} />
        <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}
