import { useState } from 'react';
import { postServices } from '../services/postServices';

export const useFile = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const getFile = (acceptedFiles) => {
		setFile(acceptedFiles[0]);
  };
  
  const getDescription = (data) => {
    setDescription(data);
  };

	const getFileById = (id) => {
		postServices.get(id);
	};

	const getAllFiles = () => {
		postServices.getAll();
	};

  const addFile = () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', description);
		postServices.create(formData);
	};

	const updateFile = (id, file) => {
		postServices.update(id, file);
	};

	const deleteFile = (id) => {
		postServices.delete(id);
	};

	return {
    file,
    getFile,
    getDescription,
		getFileById,
		getAllFiles,
		addFile,
		updateFile,
		deleteFile,
	};
};
