import React, { useEffect, useState } from 'react';
import style from './Coctail.module.css';

function Coctail(): JSX.Element {
    const [name, setName] = useState<string>('');
    const [image, setImage] = useState<string>('');

    async function loadCoctail(): Promise<void> {
        const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const obj = await res.json();
        const { drinks } = obj;
        const { strDrink, strDrinkThumb } = drinks[0];
        setName(strDrink);
        setImage(strDrinkThumb);
    }
    useEffect(() => {
        // pending - ожидание
        // fulfilled - выполнено
        // rejected - отклонено
       loadCoctail();
    }, []);
    return (
        <div className={style.container}>
            <h1>Coctail: {name}</h1>
            <img src={image} alt="" />
            <button className={style.btn} type="button" onClick={() => loadCoctail()}>Refresh image</button>
        </div>
    );
}
export default Coctail;
