import { useEffect, useState } from 'react';
import { postServices } from '../services/postServices';

export const useFile = () => {
	const [posts, setPosts] = useState([]);
	const [file, setFile] = useState(null);
	const [description, setDescription] = useState('');

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const { data } = await postServices.getAll();
				setPosts(data);
			} catch (error) {
				console.error('Error al obtener los posts:', error);
			}
		};

		fetchPosts();
	}, []);

	const getFile = (acceptedFiles) => {
		setFile(acceptedFiles[0]);
	};

	const getDescription = (data) => {
		setDescription(data);
	};

	const getPostById = (id) => {
		postServices.get(id);
	};

	const getAllPost = () => {
		postServices.getAll();
	};

	const addPost = () => {
		const formData = new FormData();
		formData.append('file', file);
		formData.append('description', description);
		postServices.create(formData);
		window.location.reload();
	};

	const updatePost = (id, file) => {
		postServices.update(id, file);
	};

	const deletePost = (id) => {
		postServices.delete(id);
	};

	return {
		file,
		posts,
		getFile,
		getDescription,
		getPostById,
		getAllPost,
		addPost,
		updatePost,
		deletePost,
	};
};
