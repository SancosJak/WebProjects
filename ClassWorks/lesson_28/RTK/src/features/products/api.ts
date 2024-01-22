import Product from './types/Product';
import ProductDTO from './types/ProductDTO';

// GET -метод получения данных

export async function getAll(): Promise<Product[]> {
	const res = await fetch('https://fakestoreapi.com/products');
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return res.json();
}
// DELETE
export async function deleteProduct(id: number): Promise<Product> {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
		method: 'DELETE',
	});
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return res.json();
}
// PUT - edit - изменение целиком
// PATCH - когда меняем одно какое-то поле
// POST - создание новой сущности

export async function createProduct(product: ProductDTO): Promise<Product> {
	const res = await fetch('https://fakestoreapi.com/products', {
		method: 'POST',
		body: JSON.stringify({
			title: product.title,
			price: product.price,
			category: product.category,
			description: product.description,
			image: product.image,
		}),
	});

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { id } = await res.json(); // вариант когда сервер присылает назад только id
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	return { ...product, id };
}
