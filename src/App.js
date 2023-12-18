import { useState } from 'react';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';


import { getTodoList, addTodo } from './api/api';
import Loadder from './Loadder/Loadder';

import './App.css';

axios.defaults.baseURL = 'http://localhost:3030/todos';





function App() {

	const [checked, setChecked] = useState(false);
	const [state, setState] = useState(false);
	const [isShownEditTask, setIsShownEditTask] = useState(false);
	const [input, setInput] = useState('');
	const [inputAbout, setInputAbout] = useState('');
	const [inputEdit, setInputEdit] = useState('');
	const [inputAboutEdit, setInputAboutEdit] = useState('');

	const now = new Date();
	const datetime = now.toLocaleString();

	const onButtonClickHandler = () => {
		const newState = true;
		setState(newState);
	};

	const onButtonClickHandlerEdit = () => {
		const newState = true;
		setIsShownEditTask(newState);
	};

	const onChangeHandler = (e) => {
		const value = e.target.value;
		setInput(value);
	};

	const onChangeHandlerAbout = (e) => {
		const value = e.target.value;
		setInputAbout(value);
	};

	const onChangeHandlerEdit = (e) => {
		const value = e.target.value;
		setInputEdit(value);
	};

	const onChangeHandlerAboutEdit = (e) => {
		const value = e.target.value;
		setInputAboutEdit(value);
	};

	const { data, isFetching, isError, error, refetch } = useQuery({
		queryKey: ['todoList'],
		queryFn: getTodoList,
	});

	const { mutateAsync } = useMutation({
		mutationFn: (newTask) => addTodo(newTask),
	});


	const deletePost = useMutation((id) => {
		try {
			axios.delete(`http://localhost:3030/todos/${id}`);
			refetch();
		} catch (error) {
			console.log('Problem3');
		}
	});


	const putPost = useMutation((id) => {
		const editTask = {
			"name": inputEdit,
			"description": inputAboutEdit,
			"checked": "true",
			"creationData": "data creation"
		};
		const newState = false;
		setIsShownEditTask(newState);
		try {
			axios.put(`http://localhost:3030/todos/${id}`, editTask);
			refetch();
		} catch (error) {
			console.log('Problem2');
		}
	});

	const addNewTodo = async () => {
		setInput(' ');
		setInputAbout(' ');
		const newTask = {
			"name": input,
			"description": inputAbout,
			"checked": "true",
			"creationData": "data creation"
		};
		try {
			await mutateAsync(newTask);
			await refetch();
		} catch (error) {
			console.log('Problem');
		}
	};

	if (isError) {
		return <span>Error: {error.massage}</span>
	};

	const handleChacboxChange = (event) => {
		const checkbox = event.target.checked;
		setChecked(checkbox);
	};



	return (
		<div className="body">
			<header>
				<h1>Contacts</h1>
			</header>
			<main>
				<div className="button">
					<button onClick={onButtonClickHandler}>Add todo</button>
					{/* {isShown && <InputForm />} */}
					{state && <>
						<label>Name todo:
							<input placeholder='name todo' onChange={onChangeHandler} value={input} />
						</label>
						<label>About todo:
							<input placeholder='about todo' onChange={onChangeHandlerAbout} value={inputAbout} />
						</label>
						<button className="buttonsave" type="button" onClick={addNewTodo}>Save</button>
					</>}
				</div>
				<ul>
					{isFetching ? (
						<Loadder />
					) : (data.map((todo) => (
						<li key={todo.id} id={todo.id}>
							<p className="label">Name todo: <span>{todo.name}</span></p>
							<p className="label">About todo: <span>{todo.description}</span></p>
							<p className="label">Creation date : <span>{datetime}</span></p>
							<input type='checkbox' checked={checked} onChange={handleChacboxChange} />
							<button type="button" onClick={onButtonClickHandlerEdit}>Edit task</button>
							<button type="button" onClick={() => deletePost.mutate(todo.id)}>Delete task</button>
							{isShownEditTask && <>
								<p></p>
								<label>Name todo:
									<input placeholder='name todo' onChange={onChangeHandlerEdit} defaultValue={todo.name} />
								</label>
								<p></p>
								<label>About todo:
									<input placeholder='about todo' onChange={onChangeHandlerAboutEdit} defaultValue={todo.description} />
								</label>
								<p></p>
								<button className="buttonsave" type="button" onClick={() => putPost.mutate(todo.id)}>Save edit task</button>
							</>}
						</li>
					))
					)}
				</ul>
			</main>
		</div>
	);
}

export default App;



