import React from "react";
import ListRender from "./ListRender";

const Render = () => {
	const render = [
		{ id: 1, name: 'Ivan' }, 
		{ id: 2, name: 'Olena' }, 
		{ id: 3, name: 'Anna' }, 
		{ id: 4, name: 'Max' }
	];


	return (
		<div>
			{render.map((name) => {
				return <ListRender key={name.id} name={name.name} />;
			})}
		</div>
	);
};

export default Render;