import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';

export default function DishForm():JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>('');
  const [error, setError] = useState<string>('');

  function validateInputs(): boolean {
    if (title.trim() === '') {
      setError('Нужно ввести название блюда');
      return false;
    }
    if (category.trim() === '') {
      setError('Нужно ввести категорию блюда');
      return false;
    }
    if (price < 0) {
      setError('Нужно ввести цену блюда');
      return false;
    }
    if (image.trim() === '') {
      setError('Нужно ввести ссылку на картинку блюда');
      return false;
    }
    setError('');
    return true;
  }
  function clearInputsAndError(): void {
    setTitle('');
    setCategory('');
    setPrice(0);
    setImage('');
    setError('');
  }
  const dispatch = useDispatch();
  function handleSubmit(e:FormEvent<HTMLFormElement>):void {
    e.preventDefault();
    if (validateInputs()) {
      dispatch({ type: 'dishes/create', payload: { title, category, price, image } });
      clearInputsAndError();
    }
  }
  return (
    <div>
        <h1>Форма создания Меню</h1>
        <form onSubmit={handleSubmit}>
            {error && <div style={{color: 'red'}}>{error}</div>}
            <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="image" value={image} onChange={(e) => setImage(e.target.value)} />
            <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="" disabled>Category</option>
                <option value="Main">Main</option>
                <option value="Dessert">Desserts</option>
                <option value="Snack">Snack</option>
            </select>
            <input type="number" placeholder="price" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
            <button type="submit">Создать блюдо</button>
        </form>
    </div>
  )
}
