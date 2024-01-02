import { Button, Form, Input } from 'antd';
import { useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

import './Login.css';

const Login = ({ userList }) => {

	const { setIsAuthenticated } = useContext(AuthContext);

	const [inputEmail, setInputEmail] = useState({});
	const navigate = useNavigate();

	const onFinish = (values) => {
		const user = userList.find((user) => user.usreName === values.usreName);
		setInputEmail(user);

		if (user.usreName.toLowerCase() === values.usreName.toLowerCase()) {
			localStorage.setItem('usreName', values.usreName);
			setIsAuthenticated(true);
			navigate('/', { replace: true });
		}
	};


	return (
		<>
			<div className='form'>
				<h2>Login</h2>
				<div>
					<Form onFinish={onFinish}>
						<Form.Item
							name='usreName'
							rules={[{ required: true, message: 'Please input your name!' }]}
						>
							<Input className='input' type='email' placeholder='email' />
						</Form.Item>
						<Form.Item>
							<Button
								className='button'
								type='primary'
								htmlType='submit'
							>
								Login in
							</Button>
						</Form.Item>
					</Form>
					{!inputEmail && (
						<Navigate to='/registration' replace={true} />
					)}
				</div>
			</div>


		</>
	);
};

export default Login;



