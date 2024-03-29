import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function Sandwich(): JSX.Element {
    const sandwich = useSelector((state: RootState) => state.sandwich.value);
    const dispatch = useDispatch();
    function handleAddCheese(): void {
        dispatch({ type: 'sandwich/addIngredient', payload: 'cheese' });
    }
    function handleAddSalami(): void {
        dispatch({ type: 'sandwich/addIngredient', payload: 'salami' });
    }
    function handleAddBread(): void {
        dispatch({ type: 'sandwich/addIngredient', payload: 'bread' });
    }
    function handleClear(): void {
        dispatch({ type: 'sandwich/clear' });
    }
  return (
    <div>
        <p>Sandwich: {sandwich}</p>
        <button type="button" onClick={handleAddCheese}>Add Cheese</button>
        <button type="button" onClick={handleAddSalami}>Add Salami</button>
        <button type="button" onClick={handleAddBread}>Add Bread</button>
        <button type="button" onClick={handleClear}>Clear</button>
    </div>
  );
}
