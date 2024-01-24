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
//createSlice - это функция из библиотеки Redux Toolkit,
// предназначенная для создания срезов (slices) в Redux.
// Срезы позволяют организовывать логику управления состоянием в Redux,
// включая редукторы, действия и начальное состояние, в более компактной и декларативной форме.
//Важные моменты createSlice:
// 1)Название исходного состояния (name): Определяет имя для среза. В нашем коде это 'products'.
// 2)Начальное состояние (initialState): Задает начальное состояние для среза.
// В нашем коде это объект initialState с полями products и toggle.
// 3)Обработчики редюсеры (reducers): Позволяют определить синхронные действия (reducers),
// которые изменяют состояние. В нашем коде это changeToggleStatus и chooseFavoriteProduct.
// 4)Дополнительные редюсеры (extraReducers): Предоставляет возможность обрабатывать действия,
// которые создаются с использованием createAsyncThunk. Это важно для обработки асинхронных операций,
// таких как загрузка, удаление и создание продуктов в вашем коде.
// 5)Создание action creators и reducer:
//createSlice генерирует action creators для каждого редюсера из reducers.
//Возвращает редюсер, который автоматически обрабатывает созданные action creators,
// обновляя состояние в соответствии с логикой внутри редюсеров.
