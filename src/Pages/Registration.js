import React from 'react';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import { addUser } from '../api/api';


import './Registration.css';


const Registration = () => {

	const [inputEmail, setInputEmail] = useState('');
	const [inputPassword, setinputPassword] = useState('');
	const { mutateAsync } = useMutation({
		mutationFn: (newUser) => addUser(newUser),
	});

	const onChangeHandler = (e) => {
		const value = e.target.value;
		setInputEmail(value);
	};

	const onChangeHandlerAbout = (e) => {
		const value = e.target.value;
		setinputPassword(value);
	};

	const addNewUser = async () => {
		setInputEmail(' ');
		setinputPassword(' ');
		const newUser = {
			"usreName": inputEmail,
			"password": inputPassword,
		};
		try {
			await mutateAsync(newUser);
		} catch (error) {
			console.log('Problem');
		}
	};


	return (
		<div className='loginCenter'>
			<h2>Registration</h2>
			<input placeholder='email' type='email' onChange={onChangeHandler} value={inputEmail}></input>
			<input placeholder='password' type='text' onChange={onChangeHandlerAbout} value={inputPassword} ></input>
			<Link className="Registration" onClick={addNewUser} to='/'>Log in</Link>
		</div>
	);
};

export default Registration;