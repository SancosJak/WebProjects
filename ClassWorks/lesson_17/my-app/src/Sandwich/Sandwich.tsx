/* eslint-disable max-len */
import React, { useState } from 'react';

import style from './Sandwich.module.css';

export default function Sandwich(): JSX.Element {
    const [sandwich, setSandwich] = useState<string>('Бутербродный конфигуратор');
    function handleAddCheese():void {
        setSandwich(`${sandwich} Сыр`);
    }
    function handleAddBread():void {
        setSandwich(`${sandwich} Хлеб`);
    }
    function handleAddSalami():void {
        setSandwich(`${sandwich} Колбаса`);
    }
    function handleAddClear():void {
        setSandwich('Бутерброд');
    }
    // Хук useState возвращает массив из 2х элементов
    // (текущее состояние, функция для обновления состояния)
    // Состояние - может быть любым типом данных(текст, число, массив и т.д.)
    // изменять состояние нужно через функцию set
    return (
        <><h1>Sandwich</h1><img src="https://100foto.club/uploads/posts/2022-11/1668343862_18-100foto-club-p-sendvichi-dlya-kofeen-29.jpg" alt="" /><p>{sandwich}</p><div className={`${style.container} ${style.anotherClass}`}>
            <button className={style.btn} type="button" onClick={handleAddCheese}>Добавить сыр</button>
            <button className={style.btn} type="button" onClick={handleAddBread}>Добавить хлеб</button>
            <button className={style.btn} type="button" onClick={handleAddSalami}>Добавить колбасу</button>
            <button className={style.btn} type="button" onClick={handleAddClear}>Сбросить</button>
                                                                                                                                                                     </div>
        </>
    );
}
