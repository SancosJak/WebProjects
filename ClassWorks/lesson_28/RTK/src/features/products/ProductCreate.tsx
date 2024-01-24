import { FormEvent, useState } from 'react';
import { createProduct } from './productsSlice';
import { useAppDispatch } from '../../app/hooks';

export default function ProductCreate(): JSX.Element {
	const [title, setTitle] = useState<string>('');
	const [price, setPrice] = useState<number>(0);
	const [category, setCategory] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [image, setImage] = useState<string>('');
	const [error, setError] = useState<string>('');
	const dispatch = useAppDispatch();
	function validateInputs(): boolean {
		if (title.trim() === '') {
			setTitle('Title is required');
			return false;
		}
		if (price <= 0) {
			setPrice(1);
			setError('Price must be greater than 0');
			return false;
		}
		if (category.trim() === '') {
			setCategory('Category is required');
			return false;
		}
		if (description.trim() === '') {
			setDescription('Description is required');
			return false;
		}
		if (image.trim() === '') {
			setImage('Image is required');
			return false;
		}
		return true;
	}
	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		if (validateInputs()) {
			dispatch(createProduct({ title, price, category, description, image }));
		}
	}
	return (
		<div>
			<h1>Форма создания</h1>
			<form onSubmit={handleSubmit}>
				{error && <p>{error}</p>}
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					placeholder="Title"
				/>
				<input
					type="text"
					value={price}
					onChange={(e) => setPrice(Number(e.target.value))}
					placeholder="Price"
				/>
				<select value={category} onChange={(e) => setCategory(e.target.value)}>
					<option value="" disabled>
						Category
					</option>
					<option value="electronics">Electronics</option>
					<option value="jewelery">Jewelery</option>
					<option value="mens clothing">Mens Clothing</option>
				</select>
				<input
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="Description"
				/>
				<input
					type="text"
					value={image}
					onChange={(e) => setImage(e.target.value)}
					placeholder="Image"
				/>
				<button type="submit">Create</button>
			</form>
		</div>
	);
}
