import React, { useState } from 'react';
import style from './Sandwich.module.css';

export default function Sandwich(): JSX.Element {
  const [sandwich, setSandwich] = useState<string>('Бутерброд');
  const [selectedDrink, setSelectedDrink] = useState<string>('');

  function handleAddIngredient(ingredient: string): void {
    setSandwich((prevSandwich) => `${prevSandwich} ${ingredient}`);
  }

  function handleAddClear(): void {
    setSandwich('Бутерброд');
    setSelectedDrink('');
  }

  const ingredients = ['Хлеб', 'Сыр', 'Колбаса', 'Помидор', 'Лист салата', 'Майонез'];
  const drinks = ['Чай', 'Кофе', 'Сок', 'Вода'];

  return (
    <>
      <h1>Sandwich</h1>
      <img
        src="https://100foto.club/uploads/posts/2022-11/1668343862_18-100foto-club-p-sendvichi-dlya-kofeen-29.jpg"
        alt=""
      />
      <p>{`Бутерброд: ${sandwich}`}</p>
      <div className={`${style.container} ${style.anotherClass}`}>
        {ingredients.map((ingredient, index) => (
          <button
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={style.btn}
            type="button"
            onClick={() => handleAddIngredient(ingredient)}
          >
            Добавить {ingredient.toLowerCase()}
          </button>
        ))}
        <div className={style.dropdown}>
          <label htmlFor="drinks">Выберите напиток:</label>
          <select
            id="drinks"
            value={selectedDrink}
            onChange={(e) => setSelectedDrink(e.target.value)}
            className={style.select}
          >
            <option value="">-- Выберите напиток --</option>
            {drinks.map((drink, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option key={index} value={drink}>
                {drink}
              </option>
            ))}
          </select>
        </div>
        <button className={style.btn} type="button" onClick={handleAddClear}>
          Сбросить
        </button>
      </div>
    </>
  );
}
