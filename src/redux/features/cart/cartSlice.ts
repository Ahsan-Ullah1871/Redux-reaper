import { IProduct } from "@/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
	products: IProduct[];
	total: number;
}

const initialState: CartState = {
	products: [],
	total: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add_to_cart: (state, action: PayloadAction<IProduct>) => {
			const isExist = state.products.find(
				(p) => p._id === action.payload._id
			);
			if (isExist) {
				isExist.quantity = isExist.quantity! + 1;
			} else {
				state.products.push({
					...action.payload,
					quantity: 1,
				});
			}
			state.total += action.payload.price;
		},
		delete_from_cart: (state, action: PayloadAction<IProduct>) => {
			state.products = state.products.filter(
				(p) => p._id !== action.payload._id
			);
			state.total -=
				action.payload.price * action.payload.quantity!;
		},
		decrease_item_from_cart: (
			state,
			action: PayloadAction<IProduct>
		) => {
			const isExist = state.products.find(
				(p) => p._id === action.payload._id
			);
			if (isExist && isExist.quantity! > 1) {
				isExist.quantity = isExist.quantity! - 1;
			} else {
				state.products = state.products.filter(
					(p) => p._id !== action.payload._id
				);
			}

			state.total -= action.payload.price;
		},
	},
});

// Action creators are generated for each case reducer function
export const { add_to_cart, delete_from_cart, decrease_item_from_cart } =
	cartSlice.actions;

export default cartSlice.reducer;
