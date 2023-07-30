import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";

import pcBUilderReducer from './features/pcBuilder/pcBuilderSlice'

export default configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer,
    pcBuilder:pcBUilderReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
