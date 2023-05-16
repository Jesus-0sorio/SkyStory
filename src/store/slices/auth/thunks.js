import { api } from '../../../config/axios';

import { loginFailed, loginSuccess } from './authSlice';

export const login = ({email, password}) => async (dispatch) => {
  try {
    const { data } = await api.post('/auth/login', { email, password });
    window.localStorage.setItem('token', data.access_token);
    window.localStorage.setItem('user', JSON.stringify(data.user));
    dispatch(loginSuccess(data));
    return true
	} catch (error) {
		dispatch(loginFailed(error.message));
	}
};
