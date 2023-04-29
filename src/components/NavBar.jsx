import {NavLink} from 'react-router-dom'

export const NavBar = () => {
  return (
		<nav className='w-screen h-20 border-b'>
			<div className='flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8'>
				<div className='p-4 flex flex-row items-center justify-between'>
					<NavLink
						to='/'
						className='text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline'>
						Taller 01
					</NavLink>
				</div>
				<ul className='flex flex-row'>
					<li> home </li>
					<li> Create </li>
				</ul>
			</div>
		</nav>
	);
}
