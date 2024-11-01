import { useQuery } from '@tanstack/react-query';
import { userRecomended } from '../services/userApi';


// not completed where i fetch the userData and 1 more hook to create them not made 
export const useUserDatas = () => {
	const {
		isLoading,
		data: datas = null,
		error,
	} = useQuery({
		queryKey: ['userDatas'],
		queryFn: () => userRecomended(),
	});

	return { isLoading, datas, error };
};
