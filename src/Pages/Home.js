import { Link } from 'react-router-dom';

import './Home.css';


const Home = () => {

	return (
		<div className='homeCenter'>
			<h2>Hello, friend!</h2>
			<p>Welcome to our event planner. <br></br>Here you can write a list of any tasks that need to be completed, click "Start" and let's start!</p>
			<Link className="homeButton" to='/toDo'>START</Link>
		</div>
	);
};

export default Home;