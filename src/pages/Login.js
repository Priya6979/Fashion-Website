import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const schema = yup.object().shape({
		email: yup.string().email().required('Email is Required'),
		password: yup.string().min(4).max(10).required('Password must be Required'),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data) => {
		console.log(data);

		if (data.email || data.password) {
			navigate('/home');
		}
	};

	return (
		<div>
			<div className="loginHeader">
				<h1 style={{ margin: '0px' }}>🕺 WELCOME TO OUR FASHION WORLD 💃</h1>
			</div>
			<div className="login">
				<div className="sign">
					<h1> SIGN IN PAGE</h1>
					<form className="loginUser">
						<span>
							<PersonIcon style={{ top: '509px', position: 'absolute' }} />
							<input
								className="texting"
								size={'45'}
								type="text"
								placeholder="Email Address"
								value={email}
								{...register('email')}
								onChange={(e) => setEmail(e.target.value)}
							></input>
							<p>{errors.email?.message}</p>
						</span>
						<span>
							<LockIcon style={{ top: '622px', position: 'absolute' }} />
							<input
								className="texting"
								size={'45'}
								type="text"
								placeholder="Password"
								value={password}
								{...register('password')}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<p>{errors.password?.message}</p>
						</span>

						<button
							className="loginButton"
							onClick={handleSubmit(onSubmit)}
							type="submit"
						>
							{' '}
							Sign In{' '}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
