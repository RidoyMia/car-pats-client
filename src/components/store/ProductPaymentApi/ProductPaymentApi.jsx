import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const prodcutPaymentApi = createApi({
    reducerPath : 'productPayment',
    baseQuery : fetchBaseQuery({baseUrl : 'https://car-repairing-server.vercel.app/api/v1/productPayment'}),
    endpoints : builder =>({
        productPayment : builder.mutation({
            query : (productorderinfo) =>({
                url : `/create`,
                method : 'POST',
                body : productorderinfo
            })
        }),
        getSingleProductPayment : builder.query({
            query : (id) =>`/product/${id}`
        }),
        getSingleUserPayment : builder.query({
            query : ({accesstoken,email}) => ({
                url : `/user/${email}`,
                method : 'GET',
             
                headers : {
                    accesstoken 
                },
               
            })
        })
    })
})
export const {useProductPaymentMutation,useGetSingleProductPaymentQuery,useGetSingleUserPaymentQuery} = prodcutPaymentApi