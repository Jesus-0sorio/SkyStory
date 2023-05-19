import { apiFile } from '../config/axios';

const BASE_URL = 'post';

export const postServices = {
	get: async (id) => {
		return await apiFile.get(`/${BASE_URL}/${id}`);
	},

	getAll: async () => {
		return await apiFile.get(`/${BASE_URL}`);
	},

	create: async (data) => {
		return await apiFile.post(`/${BASE_URL}`, data);
	},

	update: async (id, data) => {
		return await apiFile.patch(`/${BASE_URL}/${id}`, data);
	},

	delete: async (id) => {
		return await apiFile.delete(`/${BASE_URL}/${id}`);
	},
};
