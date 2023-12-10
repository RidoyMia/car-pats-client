import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

//https://car-repairing-server.vercel.app


export const ProductApi = createApi({
    reducerPath : 'products',
    baseQuery : fetchBaseQuery({baseUrl : `https://car-repairing-server.vercel.app/api/v1/product`}),
    tagTypes : ['products'],
    endpoints : builder =>({
        getAllProducts : builder.query({
            query : ()=> '/all',
            providesTags : ['products']
        }),
        getSingleProduct : builder.query({
            query : (id)  => `/${id}`
        }),
        createProduct : builder.mutation({
            query : (productInfo) =>({
                url : '/create',
                method : 'POST',
                body : productInfo
            })
        }),
        deletedProduct : builder.mutation({
            query : (id) => ({
                url : `/${id}`,
                method : 'DELETE',

            }),
            invalidatesTags : ['products']
        }),
        updateSingleProduct : builder.mutation({
            query : ({id ,...productInfo}) =>({
                url : `/${id}`,
                method : 'PATCH',
                body : productInfo
            })
        })
    })
}) 

export const {useGetAllProductsQuery,useGetSingleProductQuery,useCreateProductMutation,useDeletedProductMutation,useUpdateSingleProductMutation} = ProductApi