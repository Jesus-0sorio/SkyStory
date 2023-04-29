// import {} from 'react-router-dom'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import {ProtectedRouter} from './components/ProtectedRouter'

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
				<Route
          element={<ProtectedRouter/>}
        >
          <Route path='/' element={<Home />} />
        </Route>
			</Routes>
		</>
	);
}

export default App;
