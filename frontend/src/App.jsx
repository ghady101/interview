import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Home from './ui/Home';
import { AuthProvider } from './Provider/AuthProvider';
import ProtectedRoute from './ProtectedRoute';
import AppLayout from './AppLayout';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Recomended from './Pages/Recomended';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000, // 1 minute
			// staleTime: Infinity, // always stale
		},
	},
});

// react router v6
const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/signup',
				element: <Signup />,
			},
			// protected
			{
				path: '/dashboard',
				element: (
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				),
			},
			{
				path: '/recomended',
				element: (
					<ProtectedRoute>
						<Recomended />
					</ProtectedRoute>
				),
			},
		],
	},
]);

function App() {
	return (
		// wrap provider arroudnd to access data
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</QueryClientProvider>
		// <AuthProvider>
		// 	<Router>
		// 		<Routes>
		// 			<Route path='/' element={<Home />} />
		// 			<Route path='/signup' element={<Signup />} />
		// 			<Route path='/login' element={<Login />} />
		// 			<Route
		// 				path='/dashboard'
		// 				element={
		// 					<ProtectedRoute>
		// 						<Dashboard />
		// 					</ProtectedRoute>
		// 				}
		// 			/>
		// 		</Routes>
		// 	</Router>
		// </AuthProvider>
	);
}

export default App;
