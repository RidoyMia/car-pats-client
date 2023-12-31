import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const serviceBlog = createApi({
    reducerPath : 'serviceBlog',
    baseQuery : fetchBaseQuery({baseUrl : `https://car-repairing-server.vercel.app/api/v1/blog`}),
    endpoints : (builder)=>({
        getAllBestServices : builder.query({
             query : () => '/all',
            
        }),
        getSingleBestService : builder.query({
            query : (id) => `/${id}`
        })    
    })
})


export const { useGetAllBestServicesQuery,useGetSingleBestServiceQuery } = serviceBlog