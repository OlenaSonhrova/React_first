import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';

import { Link } from 'react-router-dom';


import { getTodoList } from '../api/api';
import Loadder from '../Loadder/Loadder';

import '../App.css';

axios.defaults.baseURL = 'http://localhost:3030/todos';

function ToDo() {

	const [checked, setChecked] = useState([false, false, false, false, false, false, false, false, false]);

	const now = new Date();
	const datetime = now.toLocaleString();

	const { data, isFetching, isError, error, refetch } = useQuery({
		queryKey: ['todoList'],
		queryFn: getTodoList,
	});


	const deletePost = useMutation((id) => {
		try {
			axios.delete(`http://localhost:3030/todos/${id}`);
			refetch();
		} catch (error) {
			console.log('Problem3');
		}
	});

	if (isError) {
		return <span>Error: {error.massage}</span>
	};

	const handleChacboxChange = (id) => {
		const checkbox = checked.map((item, index) =>
			index === id ? !item : item);
		console.log(checkbox);
		setChecked(checkbox);
	};

	return (
		<div className="body">
			<header>
			</header>
			<main>
				<p></p>
				<div className="button">
					<Link to='/AddToDo'>Add todo</Link>
				</div>
				{/* <h5>The number of tasks: {}</h5> */}
				<ul>
					{isFetching ? (
						<Loadder />
					) : (data.map((todo) => (
						<li key={todo.id} id={todo.id}>
							<div className='checDeletEdit'>
								<input name="checked" type='checkbox' checked={checked[todo.id]} onChange={() => handleChacboxChange(todo.id)} />
								<button type="button" className="Delete" onClick={() => deletePost.mutate(todo.id)}>Delete</button>
								<Link to={`${todo.id}`}>Edit</Link>
							</div>
							<p className="label">Name todo: <span className={checked[todo.id] ? 'trueChecked' : ''} >{todo.name}</span></p>
							<p className="label">About todo: <span className={checked[todo.id] ? 'trueChecked' : ''}>{todo.description}</span></p>
							<p className="label">Creation date : <span className={checked[todo.id] ? 'trueChecked' : ''}>{datetime}</span></p>
						</li>
					))
					)}
				</ul>
			</main>
		</div>
	);
}

export default ToDo;



// checked={checked}

// style={({checked}) => ({color: checked ? 'blue' : 'pink'})} 