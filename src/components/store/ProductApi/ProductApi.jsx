import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




export const ProductApi = createApi({
    reducerPath : 'products',
    baseQuery : fetchBaseQuery({baseUrl : `https://car-repairing-server.vercel.app/api/v1/product`}),
    endpoints : builder =>({
        getAllProducts : builder.query({
            query : ()=> '/all'
        }),
        getSingleProduct : builder.query({
            query : (id)  => `/${id}`
        })
    })
}) 

export const {useGetAllProductsQuery,useGetSingleProductQuery} = ProductApi