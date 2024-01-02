import { useState } from 'react';
import { useMutation } from 'react-query';

import { addTodo } from '../api/api';

import { Link } from 'react-router-dom';
import './AddToDo.css';


const AddToDo = () => {

	const [input, setInput] = useState('');
	const [inputAbout, setInputAbout] = useState('');
	const { mutateAsync } = useMutation({
		mutationFn: (newTask) => addTodo(newTask),
	});

	const onChangeHandler = (e) => {
		const value = e.target.value;
		setInput(value);
	};

	const onChangeHandlerAbout = (e) => {
		const value = e.target.value;
		setInputAbout(value);
	};

	const addNewTodo = async () => {
		setInput(' ');
		setInputAbout(' ');
		const newTask = {
			"name": input,
			"description": inputAbout,
			"checked": false,
			"creationData": "data creation"
		};
		try {
			await mutateAsync(newTask);
		} catch (error) {
			console.log('Problem');
		}
	};

	return (
		<div className="AddToDo">
			<label>Name todo:
				<input placeholder='name todo' onChange={onChangeHandler} value={input} />
			</label>
			<label>About todo:
				<input placeholder='about todo' onChange={onChangeHandlerAbout} value={inputAbout} />
			</label>
			<Link className="addNewTodo" onClick={addNewTodo} to='/toDo'>Save</Link>
		</div>
	);
};

export default AddToDo;