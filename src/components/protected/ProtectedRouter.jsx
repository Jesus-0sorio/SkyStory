import { Outlet } from 'react-router-dom';
import { NavBar } from '../shared/NavBar';

export const ProtectedRouter = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};
