import auhtor_foto from '../image/auhtor_foto.jpg';

import './About.css';

const About = () => {

	return (
		<>
			<h2>Briefly about the author</h2>
			<div className="about">
				<img alt='foto auhtor' src={auhtor_foto}></img>
				<p className="aboutText">A React developer is a specialist who knows how to make web pages, has good knowledge of the JavaScript programming language, knows the React framework, as well as a number of other web technologies that are used when creating the client side of a website. A React developer is a specialist who knows how to make web pages, has good knowledge of the JavaScript programming language, knows the React framework, as well as a number of other web technologies that are used when creating the client side of a website.A React developer is a specialist who knows how to make web pages, has good knowledge of the JavaScript programming language, knows the React framework, as well as a number of other web technologies that are used when creating the client side of a website.</p>
			</div>
			<p className="aboutTextUL">Technologies used for development</p>
			<ul className="aboutUL">
				<li className="aboutLI">React Hook Form</li>
				<li className="aboutLI">React Query</li>
				<li className="aboutLI">React Select</li>
				<li className="aboutLI">Sass</li>
				<li className="aboutLI">Styled-components</li>
				<li className="aboutLI">Axios</li>
				<li className="aboutLI">Fetch</li>
			</ul>
		</>
	);
};

export default About;