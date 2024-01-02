import { Link } from 'react-router-dom';

import './ErrorPage.css';

const ErrorPage = () => {

	return (
		<div className='errorPage'>
			<h2 className='errorPageH2'>ERROR! NOT found page!</h2>
			<Link className="errorPageLink" to='/'>BACK</Link>
		</div>
	);
};

export default ErrorPage;