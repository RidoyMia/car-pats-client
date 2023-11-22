import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ExpertApi = createApi({
    reducerPath : 'expert',
    baseQuery : fetchBaseQuery({baseUrl : `https://car-repairing-server.vercel.app/api/v1/expert`}),
    endpoints : builder => ({
        getAllExpert : builder.query({
            query : ()=> '/all'
        }),
        getSingleExper : builder.query({
            query : (id) => `/${id}`
        })
    })
})

export const {useGetAllExpertQuery,useGetSingleExperQuery} = ExpertApi