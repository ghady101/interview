import { Navigate, useLocation } from 'react-router-dom';
import { useUser } from './hooks/useUser';


// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
	// is user null go to login and save state to redircet back if not normal
	const { user, isLoading, error } = useUser();
	const location = useLocation();

	if (isLoading)
		return (
			<div>
				<p>loading</p>
			</div>
		);

	if (!user) {
		return <Navigate to='/login' replace state={{ from: location }} />;
	}

	if (error) {
		return <Navigate to='/' replace />;
	}

	return children;
}

export default ProtectedRoute;
