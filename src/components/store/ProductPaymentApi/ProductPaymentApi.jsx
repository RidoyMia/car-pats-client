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
        }),
        getAllproductPayment : builder.query({
            query : (page)=> `/all?page=${page}`
        })
    })
})
export const {useProductPaymentMutation,useGetSingleProductPaymentQuery,useGetSingleUserPaymentQuery,useGetAllproductPaymentQuery} = prodcutPaymentApi