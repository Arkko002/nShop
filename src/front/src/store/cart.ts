import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {AppDispatch, AppThunk, RootState} from "./index";
import Product from "../models/product";

const initialCart : Array<Product> = localStorage.getItem("cart")
	? JSON.parse(<string>localStorage.getItem("cart"))
	: Array<Product>();

const slice = createSlice({
	name: "cart",
	initialState: {
		error: null,
		products: initialCart
	},
	reducers: {
		setCartError: (state, action: PayloadAction<any> ) => {
			state.error = action.payload;
		},
		addToCart: (state, action: PayloadAction<Product>) => {
			if (action.payload === undefined) {
				return;
			}

			state.products.push(action.payload);
			localStorage.setItem("cart", JSON.stringify(state.products));
		},
		removeFromCart: (state, action: PayloadAction<Product>) => {
			if (action.payload === undefined) {
				return;
			}
			//TODO
			localStorage.setItem("cart", JSON.stringify(state.products));
		}
	}
});

export const add = (product: Product): AppThunk => async (dispatch: AppDispatch) => {
	try {
		dispatch(addToCart(product));
	} catch (e) {
		dispatch(setCartError(e));
	}
};

export const remove = (product: Product): AppThunk => async (dispatch: AppDispatch) => {
	try {
		dispatch(removeFromCart(product));
		//TODO
	} catch (e) {
		dispatch(setCartError(e));
	}
};

export const { addToCart, removeFromCart, setCartError } = slice.actions;
export const cartSelector = (state: RootState) => state.cart;
export default slice.reducer;
