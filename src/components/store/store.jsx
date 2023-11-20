import { configureStore } from "@reduxjs/toolkit";
import { serviceBlog } from "./serviceBlogApi/ServiceBlogApi";
import { BlogApi } from "./BlogApi/BlogApi";
import { servicesApi } from "./ServicesApi/ServicesApi";



export const store = configureStore({
    reducer : {
[serviceBlog.reducerPath ]: serviceBlog.reducer,
[BlogApi.reducerPath] : BlogApi.reducer,
[servicesApi.reducerPath] : servicesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serviceBlog.middleware,BlogApi.middleware,servicesApi.middleware)
})

export default store