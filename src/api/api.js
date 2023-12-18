import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030/todos';

export const getTodoList = async () => {
	const todoList = await axios.get('http://localhost:3030/todos');
	return todoList.data;
};

export const addTodo = async (newTask) => {
	const todoList = await axios.post('http://localhost:3030/todos', newTask);
	return todoList.data;
};
