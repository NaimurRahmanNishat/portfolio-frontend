import { configureStore } from "@reduxjs/toolkit";
import contactApi from "./features/contact/contactApi";
import projectApi from "./features/projects/projectApi";
import blogApi from "./features/blogs/blogApi";

export const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(contactApi.middleware, projectApi.middleware, blogApi.middleware);
  },
})

// Infer the type of makeStore
export type AppStore = ReturnType<typeof configureStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
