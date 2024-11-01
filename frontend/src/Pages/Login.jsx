import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import './Login.css';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login, isLoading } = useLogin();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) return;

		login({ email, password }); // call the mutation
	};

	return (
		<div>
			<h2 className='loginheader'>Login</h2>
			<form className='login' onSubmit={handleSubmit}>
				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type='submit' disabled={isLoading}>
					Login
				</button>
			</form>
			<p>
				dont u have account? <Link to='/signup'>Register now</Link>
			</p>
		</div>
	);
	// return (
	// 	/* From Uiverse.io by bociKond */
	// 	<form className='form'>
	// 		<span className='input-span'>
	// 			<label htmlFor='email' className='label'>
	// 				Email
	// 			</label>
	// 			<input
	// 				type='email'
	// 				placeholder='Email'
	// 				value={email}
	// 				onChange={(e) => setEmail(e.target.value)}
	// 				// type='email'
	// 				// name='email'
	// 				id='email'
	// 			/>
	// 		</span>
	// 		<span className='input-span'>
	// 			<label htmlFor='password' className='label'>
	// 				Password
	// 			</label>
	// 			<input
	// 				type='password'
	// 				placeholder='Password'
	// 				value={password}
	// 				onChange={(e) => setPassword(e.target.value)}
	// 				// type='password'
	// 				// name='password'
	// 				id='password'
	// 			/>
	// 		</span>
	// 		<input className='submit' type='submit' value='Log in' />
	// 		<span className='span'>
	// 			dont u have account? <Link to='/signup'>Register now</Link>
	// 		</span>
	// 	</form>
	// );
}

export default Login;
