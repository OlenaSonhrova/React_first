import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy, useState } from 'react';

import './App.css';
import Loadder from './Loadder/Loadder';
import { useQuery } from 'react-query';
import { getAllUser } from './api/api';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { AuthContext } from './Context/AuthContext';

const Home = lazy(() => import('./Pages/Home'));
const ToDo = lazy(() => import('./Pages/ToDo'));
const About = lazy(() => import('./Pages/About'));
const Layout = lazy(() => import('./Layout/Layout'));
const EditToDo = lazy(() => import('./Pages/EditToDo'));
const AddToDo = lazy(() => import('./Pages/AddToDo'));
const ErrorPage = lazy(() => import('./Pages/ErrorPage'));
const Login = lazy(() => import('./Pages/Login'));
const Registration = lazy(() => import('./Pages/Registration'));


function App() {

	const [isAuthenticated, setIsAuthenticated] = useState(
		!!localStorage.getItem('usreName')
	);


	const { data: userList, isFetching } = useQuery({
		queryKey: ['userList'],
		queryFn: getAllUser,
		refetchOnReconnect: false,
		refetchOnWindowFocus: false,
	});

	return (
		<>
			<main>
				<AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
					<Suspense fallback={<Loadder />}>
						<Routes>
							<Route
								path='/'
								element={
									<Layout
										isFetching={isFetching}
									/>
								}
							>
								<Route index element={<Home />} />
								<Route path='/login'
									element={<Login
										userList={userList}
									/>
									}
								/>
								<Route
									path='/toDo'
									element={
										<PrivateRoute>
											<ToDo />
										</PrivateRoute>
									}
								/>
								<Route
									path='/AddToDo'
									element={
										<PrivateRoute>
											<AddToDo />
										</PrivateRoute>
									}
								/>
								<Route
									path='/toDo/:id'
									element={
										<PrivateRoute>
											<EditToDo />
										</PrivateRoute>
									}
								/>
								<Route
									path='/about'
									element={
										<PrivateRoute>
											<About />
										</PrivateRoute>
									}
								/>
								<Route path='/registration' element={<Registration />} />
								<Route path='/404' element={<ErrorPage />} />
								<Route path='*' element={<Navigate to='/404' />} />
							</Route>
						</Routes>
					</Suspense>
				</AuthContext.Provider>
			</main>
		</>
	);
}

export default App;



