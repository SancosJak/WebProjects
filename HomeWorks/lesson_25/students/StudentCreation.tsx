import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function StudentCreation(): JSX.Element {
  const [name, setName] = useState<string>('');
  const [major, setMajor] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const today = new Date().toISOString().substring(0, 10);
  const [enrollmentDate, setEnrollmentDate] = useState<string>(today);
  const [error, setError] = useState<string>('');

  const dispatch = useDispatch();

  function clearInputsAndError(): void {
    setCountry('');
    setMajor('');
    setEnrollmentDate(today);
    setName('');
    setError('');
  }

  function validateInputs(): boolean {
    if (name.trim() === '') {
      setError('Нужно ввести имя студента');
      return false;
    }
    if (major.trim() === '') {
      setError('Нужно выбрать специальность студента');
      return false;
    }
    if (country.trim() === '') {
      setError('Нужно выбрать страну студента');
      return false;
    }
    return true;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (validateInputs()) {
      dispatch({
        type: 'students/add',
        payload: {
          name, major, country, enrollmentDate
        }
      });
      clearInputsAndError();
    }
  }

  return (
    <div>
      <h1>Форма создания студента</h1>
      <form onSubmit={handleSubmit}>
        {error && (<div style={{ color: 'red' }}>{error}</div>)}
        <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Специальность" value={major} onChange={(e) => setMajor(e.target.value)} />
        <input type="text" placeholder="Страна" value={country} onChange={(e) => setCountry(e.target.value)} />
        <input type="date" value={enrollmentDate} onChange={(e) => setEnrollmentDate(e.target.value)} />
        <button type="submit">Создать</button>
      </form>
    </div>
  );
}
