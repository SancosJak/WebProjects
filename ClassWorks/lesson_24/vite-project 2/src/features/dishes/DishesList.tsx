import { useDispatch, useSelector } from 'react-redux'
import selectDishes from './selectors';
import { DishID } from './types/Dish';
import ClearIcon from '@mui/icons-material/Clear';
import styles from './DishesList.module.css'
import DishEditForm from './DishEditForm';
export default function DishesList(): JSX.Element {
  const dishes = useSelector(selectDishes);
  const dispatch = useDispatch();
  const handleDelete = (id: DishID): void => {
      dispatch({ type: 'dishes/delete', payload: id });
  };
  return (
      <ul className={styles.list}>
        {dishes.map((dish) => (
          <li key={dish.id} className={styles.dishCard}>
            <h3 className={styles.heading}>{dish.title}</h3>
            <p className={styles.category}>{dish.category}</p>
            <p className={styles.price}>{dish.price} $</p>
            <img className={styles.image} src={dish.image} alt={dish.title} />
            <div className={styles.icons}>
              <ClearIcon onClick={() => handleDelete(dish.id)} />
              <DishEditForm dish={dish} />
            </div>
          </li>
        ))}
      </ul>
  )
}
