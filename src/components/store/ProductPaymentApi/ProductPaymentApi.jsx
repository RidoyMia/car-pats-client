import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const prodcutPaymentApi = createApi({
    reducerPath : 'productPayment',
    baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:7000/api/v1/productPayment'}),
    endpoints : builder =>({
        productPayment : builder.mutation({
            query : (productorderinfo) =>({
                url : `/create`,
                method : 'POST',
                body : productorderinfo
            })
        })
    })
})
export const {useProductPaymentMutation} = prodcutPaymentApi