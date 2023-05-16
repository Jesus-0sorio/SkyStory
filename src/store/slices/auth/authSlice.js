import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	user: null,
	token: null,
	isAuthenticating: false,
	error: null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginSuccess: (state, action) => {
			state.isAuthenticating = false;
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		loginFailed: (state, action) => {
			state.isAuthenticating = false;
			state.user = null;
			state.token = null;
			state.error = action.payload.error;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticating = false;
      state.error = null;
    }
	},
});

export const { loginSuccess, loginFailed, logout } = authSlice.actions;

