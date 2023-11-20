import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const servicesApi = createApi({
    reducerPath : 'services',
    baseQuery : fetchBaseQuery({baseUrl : `https://car-repairing-server.vercel.app/api/v1/service`}),
    endpoints : builder =>({
        getAllServices : builder.query({
            query : ()=> '/all'
        })
    })
})
export const {useGetAllServicesQuery} = servicesApi