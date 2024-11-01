import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { userLogin } from '../services/userApi';

// login using mutation and redirect to whereever he was
export function useLogin() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const location = useLocation();

	const { mutate: login, isLoading } = useMutation({
		mutationFn: ({ email, password }) => userLogin({ email, password }),
		onSuccess: (data) => {
			queryClient.invalidateQueries(['user']);
			queryClient.setQueryData(['user'], data.user);
			if (location.state?.from) {
				console.log(location.state?.from);
				navigate(location.state?.from, { replace: true });
			} else {
				navigate('/', { replace: true });
			}
		},
		onError: (err) => {
			console.log('ERROR', err);
			// toast.error('Provided email or password are incorrect');
		},
	});

	return { login, isLoading };
}
