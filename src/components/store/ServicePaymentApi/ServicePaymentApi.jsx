import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const ServicePaymentApi = createApi({
    reducerPath : 'servicePayment',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:7000/api/v1/servicePayment'}),
    endpoints : builder => ({
        createPaymentService : builder.mutation({
            query : (orderinfo) =>({
                url : '/create',
                method : 'POST',
                body : orderinfo
            })
        }),
        getSinglePayment : builder.query({
            query : (id) =>`${id}`
        }),
        getSingleUserServicePaymentInfo : builder.query({
            query : ({accesstoken,email}) =>({
                url : `/user/${email}`,
                method : 'GET',
                headers : {
                    accesstoken
                }
            })
        }),
        getAllServicePayment : builder.query({
            query : (page) => `/all?page=${page}`
        })
    })
})

export const {useCreatePaymentServiceMutation,useGetSinglePaymentQuery,useGetSingleUserServicePaymentInfoQuery,useGetAllServicePaymentQuery} = ServicePaymentApi