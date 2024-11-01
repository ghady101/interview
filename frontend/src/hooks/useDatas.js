import { useQuery } from '@tanstack/react-query';
import { getDatas } from '../services/dataApi';
import { useSearchParams } from 'react-router-dom';

// get all data take into consideration the page if exist
export const useDatas = () => {
	// eslint-disable-next-line no-unused-vars
	const [searchParams, setSearchParams] = useSearchParams();
	const page = searchParams.get('page');

	const {
		isLoading,
		data: datas = null,
		error,
	} = useQuery({
		queryKey: ['datas', { page }],
		queryFn: () => getDatas({ page }),
	});

	return { isLoading, datas, error };
};
