/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './app/layouts/Layout';
import Home from './components/Home/Home';
import ProductCreate from './features/products/ProductCreate';
import ProductsList from './features/products/ProductsList';

function App(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="create-product" element={<ProductCreate />} />
				<Route path="products" element={<ProductsList />} />
			</Route>
		</Routes>
	);
}

export default App;
