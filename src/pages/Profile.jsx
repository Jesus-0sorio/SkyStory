import editImg from '../assets/edit.svg';
import emailImg from '../assets/email.svg';
import profile from '../assets/profile.svg';
import profileImg from '../assets/profileImg.webp';
import userImg from '../assets/user.svg';
import Dropzone from '../components/Dropzone';
import { Element } from '../components/profile/Element';
import { useUser } from '../hooks/useUser';

const Profile = () => {
	const {
		edit,
		img,
		name,
		email,
		username,
		file,
		handleEdit,
		handleSubmit,
		handleGetFile,
	} = useUser();
	return (
		<div className='p-4'>
			<div className='h-full mx-auto'>
				<h1 className='text-5xl text-center mb-2'>Perfil</h1>
				<form
					onSubmit={handleSubmit}
					className=' relative h-[34rem] flex flex-col mx-auto justify-center border rounded-lg shadow-md border-gray-600 pl-4 sm:w-[30rem] md:w-[32rem]'>
					<button onClick={handleEdit}>
						<img
							src={editImg}
							className='absolute top-2 right-2 w-7'
							alt=''
						/>
					</button>
					<div>
						{!edit ? (
							<img
								src={
									file ? `${import.meta.env.VITE_BASE_URL}${file}` : profileImg
								}
								className={file ? 'h-56 w-56 mx-auto rounded-full mb-5' : 'w-44 mb-10 mx-auto'}
							/>
						) : (
							<div
								className={`h-52 flex justify-center mx-5
                    ${
											!img ? 'border rounded-2xl bg-gray-700 text-white ' : ''
										}`}>
								<Dropzone
									imgClass='h-[14rem] w-[14rem] rounded-[7rem] mx-auto'
									file={img}
									handleGetFile={handleGetFile}
								/>
							</div>
						)}
						<Element
							edit={edit}
							imgSrc={userImg}
							text={username}
							title='Username'
						/>
						<Element
							edit={edit}
							imgSrc={profile}
							text={name}
							title='Nombre'
						/>
						<Element
							edit={edit}
							imgSrc={emailImg}
							text={email}
							title='Email'
							lastItem
						/>
					</div>
					<button
						className={
							edit
								? `border border-gray-600 mx-auto w-[8rem] h-[2.7rem] text-lg mt-5 rounded 
          transition duration-400 ease-in-out 
          hover:border-transparent
          active:border-transparent hover:bg-blue-600 hover:text-white
          active:scale-90
          active:bg-blue-600 active:text-white`
								: 'hidden'
						}>
						Editar
					</button>
				</form>
			</div>
		</div>
	);
};

export default Profile;
