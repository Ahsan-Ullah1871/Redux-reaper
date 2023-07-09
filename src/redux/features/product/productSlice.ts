import { IProduct } from "@/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface productState {
	status: boolean;
	priceRange: number;
}

const initialState: productState = {
	status: true,
	priceRange: 400000,
};

export const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		status_filter: (state) => {
			state.status = !state.status;
		},
		price_range_filter: (state, action: PayloadAction<number>) => {
			state.priceRange = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { status_filter, price_range_filter } = productSlice.actions;

export default productSlice.reducer;
