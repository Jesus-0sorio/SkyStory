import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../store/slices/auth/thunks';

// eslint-disable-next-line react/prop-types
export const NavBar = ({ handleToogle }) => {
	const dispatch = useDispatch();
	const [showMenu, setShowMenu] = useState('hidden');
	const hanldeMenu = () => {
		if (showMenu === 'hidden') {
			setShowMenu('block');
		} else {
			setShowMenu('hidden');
		}
	};

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<nav className='w-screen h-16 border-b'>
			<div className='flex flex-col px-2 mx-auto h-full md:items-center md:justify-between md:flex-row '>
				<div className='p-4 flex flex-row items-center justify-between'>
					<NavLink
						to='/'
						className='text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline'>
						SkyStory
					</NavLink>
					<button
						onClick={hanldeMenu}
						type='button'
						className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='w-6 h-6'
							aria-hidden='true'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fillRule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'></path>
						</svg>
					</button>
				</div>
				<div className={`${showMenu} z-10 w-full md:block md:w-auto`}>
					<ul className='flex w-full flex-col items-center p-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 md:bg-white'>
						<NavLink
							to='/'
							className='block py-2 pl-3 pr-4 text-gray-700  rounded md:bg-transparent md:hover:text-blue-700 md:p-0'>
							Inicio
						</NavLink>
						<button
							onClick={handleToogle}
							className='block py-2 pl-3 pr-4 text-gray-700  rounded md:bg-transparent md:hover:text-blue-700 md:p-0'>
							Crear
						</button>
						<NavLink
							to='/profile'
							className='block py-2 pl-3 pr-4 text-gray-700  rounded md:bg-transparent md:hover:text-blue-700 md:p-0'>
							Perfil
						</NavLink>
						<button
							onClick={handleLogout}
							className='block py-2 pl-3 pr-4 text-gray-700  rounded md:bg-transparent md:hover:text-blue-700 md:p-0'>
							Cerrar sesion
						</button>
					</ul>
				</div>
			</div>
		</nav>
	);
};
