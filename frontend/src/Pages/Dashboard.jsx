import { useSearchParams } from 'react-router-dom';
import { useDatas } from '../hooks/useDatas';
import { useData } from '../hooks/useData';

import DataList from '../ui/DataList';
import Pagination from '../ui/Pagination';

// protected
export default function Dashboard() {
	const [searchParams, setSearchParams] = useSearchParams();
	const { datas, isLoading: datasLoading } = useDatas();
	// eslint-disable-next-line no-unused-vars
	const { data, isLoading: dataLoading } = useData();

	if (datasLoading || dataLoading) return <div>loading....</div>;

	// same as backen some calc
	const page = (searchParams.get('page') ?? 1) * 1;
	const from = (page - 1) * 10 + 1;
	const to = from + 9;
	const nextDis = page * 10 + 10 > datas.totalItems;
	const prevDis = page == 1;

	const handleNext = () => {
		searchParams.set('page', page + 1);
		setSearchParams(searchParams);
	};
	const handlePrev = () => {
		searchParams.set('page', page - 1);
		setSearchParams(searchParams);
	};

	return (
		<>
		{/* make component to each sectio to be reusible */}
			<DataList datas={datas?.data} />
			{/* {datas.data.map((data) => (
				<DataItem key={data?._id} data={data} />
			))} */}

			<Pagination
				handleNext={handleNext}
				handlePrev={handlePrev}
				nextDis={nextDis}
				prevDis={prevDis}
			>
				showing {from}-{to} out of {datas.totalItems}{' '}
			</Pagination>
		</>
	);
}
