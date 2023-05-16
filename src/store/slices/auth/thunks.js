import { api } from '../../../config/axios';

import { loginFailed, loginSuccess } from './authSlice';

export const login = ({email, password}) => async (dispatch) => {
  try {
    const { data } = await api.post('/auth/login', { email, password });
    window.localStorage.setItem('token', data.access_token);
    window.localStorage.setItem('user', JSON.stringify(data.user));
    dispatch(loginSuccess(data));    
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
  try {
    await api.post('/auth/register', { email, password, name, username });  
  } catch (error) {
    dispatch(loginFailed(error.message));
  }
}
