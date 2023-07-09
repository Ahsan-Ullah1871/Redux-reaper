import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const Api = createApi({
	reducerPath: "apis",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://redux-rapper-server.vercel.app/",
	}),
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => `/product`,
		}),
		getProductDetails: builder.query({
			query: (id: number | string) => `/product/${id}`,
		}),
	}),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetProductDetailsQuery } = Api;
