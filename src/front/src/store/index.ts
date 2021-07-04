import {configureStore, Action, ThunkAction} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import  { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import cart from "./cart";

const reducer = combineReducers({
	auth,
	cart,
});

export type RootState = ReturnType<typeof reducer>

const store = configureStore({
	reducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export default store;