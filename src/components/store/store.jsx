import { configureStore } from "@reduxjs/toolkit";
import { serviceBlog } from "./serviceBlogApi/ServiceBlogApi";
import { BlogApi } from "./BlogApi/BlogApi";
import { servicesApi } from "./ServicesApi/ServicesApi";
import { ExpertApi } from "./ExpertApi/ExpertApi";
import { ProductApi } from "./ProductApi/ProductApi";
import {UserApi } from "./UserApi/UserApi";
import { ServicePaymentApi } from "./ServicePaymentApi/ServicePaymentApi";
import { prodcutPaymentApi } from "./ProductPaymentApi/ProductPaymentApi";



export const store = configureStore({
    reducer : {
[serviceBlog.reducerPath ]: serviceBlog.reducer,
[BlogApi.reducerPath] : BlogApi.reducer,
[servicesApi.reducerPath] : servicesApi.reducer,
[ExpertApi.reducerPath] : ExpertApi.reducer,
[ProductApi.reducerPath] : ProductApi.reducer,
[UserApi.reducerPath] : UserApi.reducer,
[ServicePaymentApi.reducerPath] : ServicePaymentApi.reducer,
[prodcutPaymentApi.reducerPath] : prodcutPaymentApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(serviceBlog.middleware,BlogApi.middleware,servicesApi.middleware,ExpertApi.middleware,ProductApi.middleware,UserApi.middleware,ServicePaymentApi.middleware,prodcutPaymentApi.middleware)
})

export default store