import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { userServices } from '../services/userServices';
import Swal from 'sweetalert2';

export const useUser = () => {
	const {
		user: { userID },
	} = useSelector((state) => state.user);
	const [edit, setEdit] = useState(false);
	const [img, setImg] = useState(null);
	const [{ name, email, username, file }, setUser] = useState({});

	const handleEdit = () => {
		setEdit(!edit);
		setImg(null);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const user = {
			name: e.target.elements.Nombre.value,
			email: e.target.elements.Email.value,
			username: e.target.elements.Username.value,
			file: img,
		};

		if (!user.name || !user.email || !user.username) return Swal.fire('Error', 'Ningun campo puede estar vacio', 'error');

		await userServices.update(userID, user);
		window.location.reload();
	};

	const handleGetFile = (file) => {
		setImg(file[0]);
	};

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const { data } = await userServices.get(userID);
				setUser({
					name: data.name,
					email: data.email,
					username: data.username,
					file: data.fileUrl,
				});
			} catch (error) {
				console.error('Error al obtener el usuario:', error);
			}
		};

		fetchUser();
	}, []);

	return {
		edit,
		img,
		name,
		email,
		username,
		file,
		handleEdit,
		handleSubmit,
		handleGetFile,
	};
};
