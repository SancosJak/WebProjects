import ProductsState from './types/ProductsState';
import * as api from './api';
import Product from './types/Product';
import ProductDTO from './types/ProductDTO';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: ProductsState = {
	products: [],
	toggle: false,
};

// как писать фичу
// папка ->types -> типы для одной сущности и для централизованного состояния
// папка ->api -> запросы к серверу создаем файл slice-> initialState-> async thunk ->
// -> сам slice добавляем в store-> reducer

export const loadProducts = createAsyncThunk(
	'products/loadProducts', //type нашего action
	() => api.getAll() // payload - в данном случае Product[]
	// то что возвращает api с раскрытым промисом
);

export const deleteProduct = createAsyncThunk(
	'products/deleteProduct',
	(id: number) => api.deleteProduct(id)
);

export const createProduct = createAsyncThunk(
	'products/createProduct',
	(product: ProductDTO) => api.createProduct(product)
);
export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		changeToggleStatus: (state) => {
			state.toggle = !state.toggle;
		},
		chooseFavoriteProduct: (state, action: PayloadAction<Product>) => {
			state.favoriteProduct = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loadProducts.fulfilled, (state, action) => {
				state.products = action.payload;
			})
			.addCase(deleteProduct.fulfilled, (state, action) => {
				state.products = state.products.filter(
					(product) => product.id !== action.payload.id
				);
			})
			.addCase(createProduct.fulfilled, (state, action) => {
				state.products.push(action.payload);
			});
	},
});
export default productsSlice.reducer;
export const { changeToggleStatus, chooseFavoriteProduct } =
	productsSlice.actions;
