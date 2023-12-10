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
        }),
        SigninUser : builder.mutation({
            query : (userInfo) => ({
                url : '/signin',
                method : 'POST',
                body : userInfo
            })
        }),
        getIsAdmin : builder.query({
            query : ({email,accesstoken}) => ({
                url : `/${email}`,
                method : 'GET',
                headers : {
                    'Content-Type': 'application/json',
                    accesstoken : accesstoken
                }
            })
        })
    })
})

export const {useCreateUserMutation,useSigninUserMutation,useGetIsAdminQuery} = UserApi