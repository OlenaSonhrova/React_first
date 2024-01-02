import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';


const PrivateRoute = ({ children }) => {
	const { isAuthenticated } = useContext(AuthContext);

	if (!isAuthenticated) {
		return <Navigate to='/registration' replace={true} />;
	}

	return children;
};

export default PrivateRoute;