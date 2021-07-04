import { createSlice } from "@reduxjs/toolkit";
import {AppThunk, RootState} from "./index";

const initialUser = localStorage.getItem("user")
	? JSON.parse(<string>localStorage.getItem("user"))
	: null;

const slice = createSlice({
	name: "auth",
	initialState: {
		loggingIn: false,
		user: initialUser,
	},
	reducers: {
		setLogging: (state, action) => {
			state.loggingIn = action.payload;
		},
		setAuthFailed : (state, action) => {
			//TODO
		},
		loginSuccess: (state, action) => {
			state.user = action.payload;
			localStorage.setItem("user", JSON.stringify(action.payload));
		},
		logoutSuccess: (state, action) => {
			state.user = null;
			localStorage.removeItem("user");
		},
	},
});

export const login = (): AppThunk => async (dispatch) => {
	try {
		dispatch(setLogging(true));
		// const currentUser = user.service.getUser() TODO
		// dispatch(loginSuccess(currentUser))
	} catch (e) {
		dispatch(setAuthFailed(e));
	} finally {
		dispatch(setLogging(false));
	}
};

export const logout= (): AppThunk => async (dispatch) => {
	try {
		dispatch(setLogging(true));
		//TODO
	} catch (e) {
		dispatch(setAuthFailed(e));
	}
};

// TODO Google Oauth2 login state
export const { loginSuccess, logoutSuccess, setAuthFailed, setLogging } = slice.actions;
export const authSelector = (state: RootState) => state.auth;
export default slice.reducer;