import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const BlogApi = createApi({
    reducerPath : 'Blogs',
    baseQuery : fetchBaseQuery({baseUrl : `https://car-repairing-server.vercel.app/api/v1/bestService`}),
    endpoints : builder => ({
        getAllBlogs : builder.query({
            query : ()=> '/all'
        })
    })
})

export const {useGetAllBlogsQuery} = BlogApi