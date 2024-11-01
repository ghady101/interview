import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { userSignup } from '../services/userApi';

// signup and go to login
export function useSignup() {
	const navigate = useNavigate();

	const { mutate: signup, isLoading } = useMutation({
		mutationFn: ({ name, email, password }) =>
			userSignup({ name, email, password }),
		onSuccess: () => {
			navigate('/login', { replace: true });
		},
		onError: (err) => {
			console.log('ERROR', err);
		},
	});

	return { signup, isLoading };
}
