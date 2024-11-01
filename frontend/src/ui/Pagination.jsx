// to make prev and next button in children the number
/* eslint-disable react/prop-types */
const Pagination = ({ handlePrev, handleNext, prevDis, nextDis, children }) => {
	return (
		<div>
			<button onClick={handlePrev} disabled={prevDis}>
				previous
			</button>{' '}
			{children}{' '}
			<button onClick={handleNext} disabled={nextDis}>
				next
			</button>
		</div>
	);
};

export default Pagination;
