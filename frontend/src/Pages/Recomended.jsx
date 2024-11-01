import { useState } from 'react';
import { useUserDatas } from '../hooks/useUserDatas';
import DataList from '../ui/DataList';

const Recomended = () => {
	const [search, setSearch] = useState();

	// eslint-disable-next-line no-unused-vars
	const { datas, isLoading } = useUserDatas();

	if (isLoading) return <div>loading...</div>;

	const handleSubmit = (e) => {
		e.preventDefault();

		setSearch('');
	};
	// not completed idea when search if found display and under display all before searhc for by the userData api no time left to do it
	return (
		<div>
			{' '}
			<form action='' onSubmit={handleSubmit}>
				<input
					type='text'
					name='search'
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</form>

            {/* my recomendation */}
			<DataList datas={datas?.data} />
		</div>
	);
	// return <div><DataList datas={datas}/></div>;
};

export default Recomended;


