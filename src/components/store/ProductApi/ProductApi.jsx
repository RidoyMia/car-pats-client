import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const ProductApi = createApi({
    reducerPath : 'products',
    baseQuery : fetchBaseQuery({baseUrl : `https://car-repairing-server.vercel.app/api/v1/product`}),
    endpoints : builder =>({
        getAllProducts : builder.query({
            query : ()=> '/all'
        })
    })
}) 

export const {useGetAllProductsQuery} = ProductApi