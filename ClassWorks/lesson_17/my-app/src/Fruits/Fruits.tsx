/* eslint-disable react/react-in-jsx-scope */
// Создайте компонент Fruit c пропсами
// - title, color, weight
// При помощи этого компонента создайте несколько элементов
// Желтый банан 2500 гр
// Зеленое яблоко 1000 гр
// Красное яблоко 2000 гр
interface FruitsProps {
    title: string;
    color: string;
    weight: number;
}

export default function Fruit(props: FruitsProps): JSX.Element {
    const { color, weight, title } = props;
    return (
      <div style={{ backgroundColor: color }}>
        <p>{title} {color} {weight} гр</p>
      </div>
    );
  }
