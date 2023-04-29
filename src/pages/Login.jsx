import {Link} from 'react-router-dom'
export const Login = () => {
	return (
		<div className='h-screen flex justify-center items-center'>
			<form className='border rounded p-3 h-80 w-96 flex flex-col justify-center items-center gap-3 shadow-xl'>
				<h1 className='text-3xl font-medium'>Iniciar sesion</h1>
				<div className='relative z-0 w-64 mb-3'>
					<input
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
						type='password'
						name='password'
						className='peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0'
						placeholder=' '
					/>
					<label className='absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600'>
						Password
					</label>
					<p className='my-3 text-sm text-center'>
						¿No tienes cuenta? <Link className='text-blue-600 font-medium hover:text-blue-700 underline underline-offset-1' to="/signup">Registrate aqui</Link>
					</p>
				</div>
				<button className='bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded w-52'>
					{' '}
					Ingresar{' '}
				</button>
			</form>
		</div>
	);
};
