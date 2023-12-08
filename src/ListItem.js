import React from "react";
import { useState } from 'react';


const ListItem = (props) => {

	const [checked, setChecked] = useState(false);

	const handleChacboxChange = (event) => {
		const checkbox = event.target.checked;
		setChecked(checkbox);
	};

	let message;
	if (checked) {
		message = <>
			<li style={{ listStyle: 'none', textDecoration: 'line-through' }} key={props.id}>{props.name}</li>
			<input type='checkbox' checked={checked} onChange={handleChacboxChange} />
			{props.children}
		</>
	} else {
		message = <>
			<li style={{ listStyle: 'none' }} key={props.id}>{props.name}</li>
			<input type='checkbox' checked={checked} onChange={handleChacboxChange} />
			{props.children}
		</>
	}

	if (props.action === 'opnion1') {
		if (checked === true) {
			message = <>
				<li style={{ display: 'none' }} key={props.id}>{props.name}</li>
				<input style={{ display: 'none' }} type='checkbox' checked={checked} onChange={handleChacboxChange} />
				{props.children}
			</>
		};
	} else if (props.action === 'opnion2') {
		if (checked === false) {
			message = <>
				<li style={{ display: 'none' }} key={props.id}>{props.name}</li>
				<input style={{ display: 'none' }} type='checkbox' checked={checked} onChange={handleChacboxChange} />
				{props.children}
			</>
		};
	};

	

	return (
		<>
			<div>{message}</div>
		</>
	);
};

export default ListItem;




// , display: 'none' 