import { useMutation } from '@tanstack/react-query';
import { getData } from '../services/dataApi';

// get data from dataapi by name
export const useData = () => {
	const { isLoading, data, error } = useMutation({
		mutationKey: ['data'],
		mutationFn: (firstName) => getData(firstName),
	});

	return { isLoading, data, error };
};
