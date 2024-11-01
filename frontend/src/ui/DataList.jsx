/* eslint-disable react/prop-types */
import DataItem from './DataItem';

const DataList = ({ datas }) => {
	// take aray and pass it to another comp to display
	return (
		<div className='list'>
			{datas.map((item, index) => (
				<DataItem key={index} data={item} />
			))}
		</div>
	);
};

export default DataList;
