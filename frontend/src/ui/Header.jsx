import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { useLogout } from '../hooks/useLogout';

const Header = () => {
	const { user, isLoading } = useUser();
	const { logout } = useLogout();
	// if logged show logout else show signin-up

	const Signation = () => {
		if (isLoading) return null;
		if (!user)
			return (
				<>
					<li>
						<Link to='/login'>login</Link>
					</li>
					<li>
						<Link to='/signup'>singup</Link>
					</li>
				</>
			);
		return <li onClick={() => logout()}>logout</li>;
	};

	return (
		<div>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/dashboard'>dashboard</Link>
					</li>
					<li>
						<Link to='/recomended'>recomended</Link>
					</li>
					{/* {isLoading ? null : !user ? (
						<>
							<li>
								<Link to='/login'>login</Link>
							</li>
							<li>
								<Link to='/signup'>singup</Link>
							</li>
						</>
					) : (
						<li onClick={() => logout()}>logout</li>
					)} */}
					<Signation />
				</ul>
			</nav>
		</div>
	);
};

export default Header;
