import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { NavBar } from '../shared/NavBar';

export const ProtectedRouter = () => {
	const { isAuthenticating } =
		useSelector((state) => state.user) || window.localStorage.getItem('user');

	useEffect(() => {
		if (!isAuthenticating) {
			<Navigate
				to='/login'
				replace={true}
			/>;
		}

		<Navigate
			to='/'
			replace={true}
		/>;
	}, [isAuthenticating]);

	return isAuthenticating ? (
		<>
			<NavBar />
			<Outlet />
		</>
	) : (
		<Navigate
			to='/login'
			replace={true}
		/>
	);
};
