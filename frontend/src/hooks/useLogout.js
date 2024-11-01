import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { userLogout } from '../services/userApi';

// clear cookie
export function useLogout() {
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	const { mutate: logout, isLoading } = useMutation({
		mutationFn: () => userLogout(),
		onSuccess: () => {
			queryClient.setQueryData(['user'], null);
			// queryClient.invalidateQueries(['user']);
			navigate('/', { replace: true });
			queryClient.removeQueries({ queryKey: ['user'], exact: true });
			// queryClient.removeQueries();
		},
		onError: (err) => {
			console.log('ERROR', err);
		},
	});

	return { logout, isLoading };
}
