import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom';

import { getEditToDo } from '../api/api';
import Loadder from "../Loadder/Loadder";

import './EditToDo.css';


const EditToDo = () => {
	const { id } = useParams();
	const [inputEdit, setInputEdit] = useState('');
	const [inputAboutEdit, setInputAboutEdit] = useState('');

	const { data, isFetching } = useQuery({
		queryKey: ['singelToDo'],
		queryFn: () => getEditToDo(id),
	});

	const onChangeHandlerEdit = (e) => {
		const value = e.target.value;
		setInputEdit(value);
	};

	const onChangeHandlerAboutEdit = (e) => {
		const value = e.target.value;
		setInputAboutEdit(value);
	};

	const putPost = useMutation((id) => {
		const editTask = {
			"name": inputEdit,
			"description": inputAboutEdit,
			"checked": true,
			"creationData": "data creation"
		};
		try {
			axios.put(`http://localhost:3030/todos/${id}`, editTask);
		} catch (error) {
			console.log('Problem2');
		}
	});

	return isFetching ? (
		<Loadder />
	) : (
		<div>
			<div className="editTodoInput">
				<label>Name todo:
					<input placeholder='name todo' onChange={onChangeHandlerEdit} defaultValue={data.name} />
				</label>
				<label>About todo:
					<input placeholder='about todo' onChange={onChangeHandlerAboutEdit} defaultValue={data.description} />
				</label>
				<Link className="saveAndBack" onClick={() => putPost.mutate(data.id)} to='/toDo'>Save and back</Link>
			</div>
		</div>
	);
};

export default EditToDo;
