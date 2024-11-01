import { Outlet } from 'react-router-dom';
import Header from './ui/Header';

const AppLayout = () => {
	return (
		<div>
			<Header />
			<div className='overflow-scroll'>
				<main className='mx-auto max-w-3xl'>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default AppLayout;
