import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';

function Signup() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signup } = useSignup();

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name || !email || !password) return;
		signup({ name, email, password }); // call the mutataion
	};

	return (
		<div>
			<h2 className='signupheader'>Signup</h2>
			<form onSubmit={handleSubmit} className='signup'>
				<input
					type='text'
					placeholder='Name'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
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
				<button type='submit'>Signup</button>
			</form>
			<p>
				already have account? <Link to='/login'>Sign In</Link>
			</p>
		</div>
	);
}

export default Signup;
