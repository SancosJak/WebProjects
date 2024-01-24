import { NavLink } from 'react-router-dom';

export default function NavBar(): JSX.Element {
	return (
		<nav>
			<NavLink to="/create-product">Create Product</NavLink> |{' '}
			<NavLink to="/products">Products</NavLink>
			<NavLink to="/">Home</NavLink>
		</nav>
	);
}
