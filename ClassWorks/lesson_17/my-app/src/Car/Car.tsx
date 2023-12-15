import React from 'react';

interface Props {
    color: string;
    brand: string;
}
function Car(props: Props): JSX.Element {
    const { color, brand } = props;
    return (
        <div style={{ backgroundColor: color }}>
            <h2>Car card</h2><p>Марка {brand}</p><p>Цвет {color}</p>
        </div>
    );
}
export default Car;
