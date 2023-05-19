import { api } from '../../../config/axios';

import { loginFailed, loginSuccess } from './authSlice';

export const login = ({ email, password }) => async (dispatch) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  try {
    const { data } = await api.post('/auth/login', formData);
    window.localStorage.setItem('token', data.access_token);
    window.localStorage.setItem('user', JSON.stringify(data.user));
    dispatch(loginSuccess(data)); 
    window.location.reload();
	} catch (error) {
		dispatch(loginFailed(error.message));
	}
};

export const logout = () => async (dispatch) => {
  try {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    dispatch(loginSuccess());
  } catch (error) {
    dispatch(loginFailed(error.message));
  }
}

export const register = ({ email, password, name, username }) => async (dispatch) => {
  const formData = new FormData();
  formData.append('email', email);
  formData.append('password', password);
  formData.append('name', name);
  formData.append('username', username);
  try {
    await api.post('/auth/register', formData);  
  } catch (error) {
    dispatch(loginFailed(error.message));
  }
}
