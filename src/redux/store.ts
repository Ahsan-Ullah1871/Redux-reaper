import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import { Api } from "./api/apiSlice";
import productReducer from "./features/product/productSlice";

const store = configureStore({
	reducer: {
		[Api.reducerPath]: Api.reducer,
		cart: cartReducer,
		product: productReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(Api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
