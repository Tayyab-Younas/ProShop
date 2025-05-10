import { PRODUCTS_ULR } from "../constants";

import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_ULR,
      }),
      keepUnusedDataFor: 5 ,
    }),
  }),
});

export const { useGetProductsQuery } = productsApiSlice;