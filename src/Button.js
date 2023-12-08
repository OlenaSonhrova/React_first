import React from "react";

const Button = (props) => {
	return(
		<button style={{marginLeft: '20px', marginBottom: '30px'}} type={props.type} onClick={props.onClick}>
			{props.text}
		</button>
	);
};

export default Button;