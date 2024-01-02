import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030/todos';
axios.defaults.baseURL = 'http://localhost:3030/auth';


export const getTodoList = async () => {
	const todoList = await axios.get('http://localhost:3030/todos');
	return todoList.data;
};

export const addTodo = async (newTask) => {
	const todoList = await axios.post('http://localhost:3030/todos', newTask);
	return todoList.data;
};

export const getEditToDo = async (id) => {
	const EditToDo = await axios.get(`http://localhost:3030/todos/${id}`);
	return EditToDo.data;
};

export const getAllUser = async () => {
	const users = await axios.get('http://localhost:3030/auth');
	return users.data;
};

export const addUser = async (newUser) => {
	const users = await axios.post('http://localhost:3030/auth', newUser);
	return users.data;
};
