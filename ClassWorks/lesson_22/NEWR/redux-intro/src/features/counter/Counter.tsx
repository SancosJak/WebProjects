import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';

export default function Counter(): JSX.Element {
    const dispatch = useDispatch();

    function handlePlus(): void {
        dispatch({ type: 'counter/plus', payload: 1 });
    }

    function handleMinus(): void {
        dispatch({ type: 'counter/minus', payload: 1 }); // Исправлено здесь
    }

    const counter = useSelector((state: RootState) => state.counter.value);

    return (
        <div>
            <p>Counter Value: {counter}</p>
            <button type="button" onClick={handlePlus}>+</button>
            <button type="button" onClick={handleMinus}>-</button>
            <button type="button" onClick={() => dispatch({ type: 'counter/reset' })}>Reset</button>
        </div>
    );
}
