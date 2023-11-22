import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const UserApi = createApi({
    reducerPath : 'user',
    baseQuery : fetchBaseQuery({baseUrl : 'https://car-repairing-server.vercel.app/api/v1/user'}),
    endpoints : builder =>({
        CreateUser :builder.mutation({
            query : (userInfo) => ({
                url : '/create',
                method : 'POST',
                body : userInfo
            })
        })
    })
})

export const {useCreateUserMutation} = UserApi