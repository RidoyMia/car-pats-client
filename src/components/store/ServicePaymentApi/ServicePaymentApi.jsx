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
        })
    })
})

export const {useCreatePaymentServiceMutation,useGetSinglePaymentQuery} = ServicePaymentApi