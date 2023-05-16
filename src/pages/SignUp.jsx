import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../store/slices/auth/thunks';

export const SignUp = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [user, setUser] = useState({
		name: '',
		username: '',
		email: '',
		password: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(register(user));
		navigate('/login');
	};

	return (
		<div className='h-screen flex justify-center items-center'>
			<form
				onSubmit={handleSubmit}
				className='h-[28rem] w-[26rem] flex flex-col justify-center items-center gap-3 shadow-xl border rounded'>
				<h1 className='text-3xl font-medium'>Registro</h1>
				<div className='relative z-0 w-64 mb-3'>
					<input
						onChange={(e) => setUser({ ...user, name: e.target.value })}
						type='text'
						name='name'
						className='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
						placeholder=' '
					/>
					<label className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600'>
						Nombre
					</label>
				</div>
				<div className='relative z-0 w-64 mb-3'>
					<input
						onChange={(e) => setUser({ ...user, username: e.target.value })}
						type='text'
						name='username'
						className='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
						placeholder=' '
					/>
					<label className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600'>
						Nombre de usuario
					</label>
				</div>
				<div className='relative z-0 w-64 mb-3'>
					<input
						onChange={(e) => setUser({ ...user, email: e.target.value })}
						type='email'
						name='email'
						className='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
						placeholder=' '
					/>
					<label className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600'>
						Email
					</label>
				</div>
				<div className='relative z-0 w-64 '>
					<input
						onChange={(e) => setUser({ ...user, password: e.target.value })}
						type='password'
						name='password'
						className='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
						placeholder=' '
					/>
					<label className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600'>
						Contraseña
					</label>
				</div>
				<p className='my-3 text-sm text-center'>
					¿Tienes cuenta?{' '}
					<Link
						className='text-blue-600 font-medium hover:text-blue-700 underline underline-offset-1'
						to='/login'>
						Inicia sesion
					</Link>
				</p>
				<button className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded w-52'>
					{' '}
					Registrar{' '}
				</button>
			</form>
		</div>
	);
};
