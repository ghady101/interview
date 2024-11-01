/* eslint-disable react/prop-types */
const DataItem = ({ data }) => {
	// prop to display 1 item
	return (
		<div className='item'>
			<h2>{data?.firstName}</h2>
			<h3>{data?.lastName}</h3>
			<p className='country'>{data?.country}</p>
		</div>
	);
};

export default DataItem;
