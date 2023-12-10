import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const servicesApi = createApi({
    reducerPath : 'services',
    tagTypes : ['services'],
    baseQuery : fetchBaseQuery({baseUrl : `https://car-repairing-server.vercel.app/api/v1/service`}),
    endpoints : builder =>({
        getAllServices : builder.query({
            query : ()=> '/all',
            providesTags : ['services']
        }),
        getSingleServices : builder.query({
            query : (id) => `/${id}`
        }),
        createSingleService : builder.mutation({
            query : (serviceInfo) =>({
                url : '/create',
                method : 'POST',
                body : serviceInfo
            })
        }),
        deletedSingleService : builder.mutation({
            query : (id) =>({
                url : `/${id}`,
                method : 'DELETE',

            }),
            invalidatesTags : ['services']
        }),
        updatedSingleService : builder.mutation({
            query : ({id,...productInfo}) =>({
                url : `/${id}`,
                method : 'PATCH',
                body : productInfo
            }),
            invalidatesTags : ['services']
        })
    })
})
export const {useGetAllServicesQuery,useGetSingleServicesQuery,useCreateSingleServiceMutation,useDeletedSingleServiceMutation,useUpdatedSingleServiceMutation} = servicesApi