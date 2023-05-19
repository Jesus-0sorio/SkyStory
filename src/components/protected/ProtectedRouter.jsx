import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { Modal } from '../Modal';
import { NavBar } from '../shared/NavBar';

export const ProtectedRouter = () => {
	const { isAuthenticating } =
		useSelector((state) => state.user) || window.localStorage.getItem('user');
	const [isActive, setIsActive] = useState(false);

	const handleToogle = () => {
		setIsActive(!isActive);
	};

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
			<NavBar handleToogle={handleToogle} />
			<Outlet />
			<Modal
				isActive={isActive}
				handleToogle={handleToogle}
			/>
		</>
	) : (
		<Navigate
			to='/login'
			replace={true}
		/>
	);
};
