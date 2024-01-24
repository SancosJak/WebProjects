import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
	changeToggleStatus,
	chooseFavoriteProduct,
	deleteProduct,
	loadProducts,
} from './productsSlice';
import {
	selectProducts,
	selectToggle,
	selectFavoriteProduct,
} from './selectors';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function ProductsList(): JSX.Element {
	const products = useAppSelector(selectProducts);
	const toggle = useAppSelector(selectToggle);
	const favoriteProduct = useAppSelector(selectFavoriteProduct);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);
	// диспатч в массиве зависимостей говорит,что эффект должен быть выполнен снова,
	// только если значение dispatch изменится между рендерами компонента.
	// Это используется для предотвращения лишних вызовов useEffect в случае,
	//если dispatch остается неизменным
	function handleDelete(id: number) {
		dispatch(deleteProduct(id));
	}
	return (
		<div>
			<h1>Products List</h1>
			<h2>Любимый товар</h2>
			{!favoriteProduct && <p>Товар не выбран</p>}
			<p>
				{favoriteProduct?.title} {favoriteProduct?.description}
			</p>
			<div
				style={
					toggle ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
				}
			>
				STATUS
				{toggle ? ' ON' : ' OFF'}
			</div>
			<button type="button" onClick={() => dispatch(changeToggleStatus())}>
				Изменить статус переключателя
			</button>
			<h2>Список всех товаров</h2>
			{products.map((product) => (
				<li key={product.id}>
					{product.title}
					<FavoriteIcon
						onClick={() => dispatch(chooseFavoriteProduct(product))}
					/>
					<button type="button" onClick={() => handleDelete(product.id)}>
						Удалить
					</button>
				</li>
			))}
		</div>
	);
}
