import React, { useEffect, useState } from 'react';

function Playground(): JSX.Element {
    const [numberOfDogs, setNumberOfDogs] = React.useState<number>(0);
    const [numberOfBirds, setNumberOfBirds] = useState<number>(10);

    function handleAddDogs(): void {
        setNumberOfDogs(numberOfDogs + 1);
    }

    function handleAddBirds(): void {
        setNumberOfBirds(numberOfBirds + 1);
    }
    // Жизненые цикл компонента
    // этапы:
    // 1. Инициализация (mounting) - первая отрисовка ко
    // 2. Обновление (updating) - обновление компонента
    // 3. Удаление (unmounting) - удаление компонента

    // пример 1 - пустой массив зависимостей
     useEffect(() => {
         console.log('useEffect 1 - только при первой отрисовке === mounting');
     }, []);

     // пример 2 - с массивом зависимостей
     useEffect(() => {
        console.log('useEffect 2 - при маунте и при любых изменениях');
    },);

    // пример 3 - пустой массив зависимостей
    useEffect(() => {
        console.log('useEffect 3 - при перичной отрисовке и при изменениях numberOfDogs');
    }, [numberOfDogs]);
    return (
        <div>
            <h1>Playground</h1>
            <p>Number of dogs: {numberOfDogs}</p>
            <p>Number of birds: {numberOfBirds}</p>
            <button type="button" onClick={handleAddDogs}>Add dogs</button>
            <button type="button" onClick={handleAddBirds}>Add birds</button>
        </div>
    );
}
export default Playground;
