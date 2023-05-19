// import {} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import { ProtectedRouter } from './components/protected/ProtectedRouter';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/signup'
					element={<SignUp />}
				/>
				<Route element={<ProtectedRouter />}>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/profile'
						element={<h1>Profile</h1>}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
