import { Outlet } from 'react-router-dom';
import NavBar from '../../components/Navbar/NavBar';
export default function Layout(): JSX.Element {
	return (
		<>
			<header> Хедер</header>
			<NavBar />
			<Outlet />
			<footer> Футер</footer>
		</>
	);
}
