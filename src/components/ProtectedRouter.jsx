import {Outlet} from 'react-router-dom'
import {NavBar} from './NavBar'

export const ProtectedRouter = () => {
  return (
    <>
      <NavBar />
			<Outlet />
		</>
	);
}
