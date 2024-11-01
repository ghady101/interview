import { useQuery } from '@tanstack/react-query';
import { currentUser } from '../services/userApi';

// get user if exist default null
export function useUser() {
	const {
		isLoading,
		data: user = null,
		error,
	} = useQuery({
		queryKey: ['user'],
		queryFn: currentUser,
		staleTime: Infinity,
	});

	return { isLoading, user, error };
}
