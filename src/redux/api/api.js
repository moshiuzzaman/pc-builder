
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://assignment6server.vercel.app/" }),
  endpoints: (builder) => ({
    getNewses: builder.query({
      query: () => "/news",
    }),
    getCategories: builder.query({
      query: () => "/categories",
    }),
    getCategoryBypath: builder.query({
      query: (path) => `/categories?path=${path}`,
    }),

    getProductsbyCategory: builder.query({
      query: ({ category, _page, limit }) =>
        `/products?category=${category}&_page=${_page}&_limit=${limit}`,
    }),

    getProductById: builder.query({
      query: (id) => `/products?_id=${id}`,
    }),
    getRandomPro: builder.query({
      query: (random) => `/products?_start=${random}&_end=${random+6}`,
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
  useGetNewsesQuery,
  useGetCategoriesQuery,
  useGetProductsbyCategoryQuery,
  useGetProductByIdQuery,
  useGetCategoryBypathQuery,useGetRandomProQuery
} = apiSlice;
