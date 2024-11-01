import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();
// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
	
	const [isAuth, setIsAuth] = useState(false);

	const handleLogin = () => {
		// replace with actual authentication logic
		setIsAuth(true);
	};

	const handleLogout = () => {
		setIsAuth(false);
	};

	return (
		<AuthContext.Provider value={{ isAuth, handleLogin, handleLogout }}>
			{children}
		</AuthContext.Provider>
	);
}

const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
export { useAuth, AuthProvider };
