import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import Button from './Button';
import ListItem from './ListItem';

const List = () => {

	const passwordHintId = nanoid();

	const initialValues = [
		{ id: 0, name: 'Почитати Біблію' },
		{ id: 1, name: 'Зробити сніданок' },
		{ id: 2, name: 'Пройти урок по навчанню' },
		{ id: 3, name: 'Виконати дз' }
	];
	const [input, setInput] = useState('');
	const [items, setItem] = useState(initialValues);
	const [message, setMessage] = useState('Let\'s go!');



	const onChangeHandler = (e) => {
		const value = e.target.value;
		setInput(value);
	};

	const handlerDelete = (id) => {
		const filterItems = items.filter((item) => item.id !== id);
		setItem(filterItems);
	};

	const [selektoption, setSelektoption] = useState('opnion3');

	const options = [
		{ value: 'opnion1', label: 'Активний' },
		{ value: 'opnion2', label: 'Завершений' },
		{ value: 'opnion3', label: 'Всі' },
	];

	const handleOptionChange = (event) => {
		const newselect = event.target.value;
		setSelektoption(newselect);
	};

	const clickOption = (event) => {
		event.preventDefault();
	};

	const onClickHanderler = (input) => {
		const updateElemnt = [...items, { id: passwordHintId, name: input }];
		if (input.length < 3) {
			const newmessage = 'Мімальна кількість символів 3';
			setMessage(newmessage)
		} else if (input.length > 8) {
			const newmessage = 'Максимальна кількість символів - 8';
			setMessage(newmessage)
		} else {
			const newmessage = 'Завдання додане';
			setMessage(newmessage)
			setItem(updateElemnt);
			setInput('');
		}
	};

	const onEnterHandler = (e) => {
		if (e.key === 'Enter') {
			const updateElemnt = [...items, { id: passwordHintId, name: input }];
			const value = e.target.value;
			if (value.length < 3) {
				const newmessage = 'Мімальна кількість символів 3';
				setMessage(newmessage)
			} else if (value.length > 8) {
				const newmessage = 'Максимальна кількість символів - 8';
				setMessage(newmessage)
			} else {
				const newmessage = 'Завдання додане';
				setMessage(newmessage)
				setItem(updateElemnt);
				setInput('');
			}
		};
	};
	return (
		<>
			<input
				onKeyDown={onEnterHandler}
				onChange={onChangeHandler}
				value={input}
				placeholder='new task'
			/>
			<p style={{ fontSize: '10px', color: 'grey' }}>Мімальна кількість символів - 3. Максимальна кількість символів - 8.</p>
			<div>{message}</div>
			<h2>{items.length}</h2>
			<button style={{ marginBottom: '30px' }} onClick={() => onClickHanderler(input)}>Add new task</button>
			<label>Оберіть стан:
				<select style={{ marginLeft: '30px' }} value={selektoption} onChange={handleOptionChange} onClick={clickOption}>
					{options.map((option) => (
						<option key={option.value} value={option.value} >
							{option.label}
						</option>
					))}
				</select>
			</label>
			<ul>
				{items.map((element) => (
					<ListItem key={element.id} id={element.id} name={element.name} action={selektoption}>
						{<Button text={'Delete'} onClick={() => handlerDelete(element.id)} type={'button'} />}
					</ListItem>
				))}
			</ul>
		</>
	);

};

export default List; 