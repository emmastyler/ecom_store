import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api/'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () =>'get-products'
        }),
        registerUser: builder.mutation({
            query: ({fullName, phone, email, password}) => ({
                url: 'register',
                method: 'POST',
                body: {fullName, phone, email, password}
            })
        }),
        loginUser: builder.mutation({
            query: ({email, password}) => ({
                url: 'login',
                method: 'POST',
                body: {email, password}
            })
        }),
    }),
})

export const {useGetAllProductsQuery, useRegisterUserMutation, useLoginUserMutation} = productsApi