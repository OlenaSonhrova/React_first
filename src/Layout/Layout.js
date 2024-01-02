import { Link, NavLink, Outlet } from 'react-router-dom';
import Loadder from '../Loadder/Loadder';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import './Layout.css';




const Layout = ({ isFetching }) => {

	const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

	return (
		<>
			<header>
				<NavLink to='/'>
					Home
				</NavLink>
				{isAuthenticated && (
					<>
						<NavLink to='/toDo'>
							ToDo
						</NavLink>
						<NavLink to='/about'>
							About
						</NavLink>
						<Link
							to='/Login'
							onClick={() => {
								setIsAuthenticated(false);
								localStorage.removeItem('usreName')
							}}
						>
							Log Out
						</Link>
					</>
				)}

				{!isAuthenticated && (
					<NavLink to='/Login'>
						Login
					</NavLink>
				)}
				{/* <NavLink to='/registration'>Registration</NavLink> */}
			</header>
			<main>
				{isFetching ? <Loadder /> : <Outlet />}
			</main>
			<footer></footer>
		</>
	);
};

export default Layout;



// style={{ display: props.isAuthenticated ? '' : 'none' }}