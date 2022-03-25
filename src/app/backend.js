import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3001/",
        credentials: "include",
    }),
    endpoints: (builder) => ({
        /* Sign In / Up*/
        signIn: builder.mutation({
            query: ({ body }) => ({
                url: "/signin",
                method: "POST",
                body,
            }),
        }),
        signUp: builder.mutation({
            query: ({ body }) => ({
                url: "/signup",
                method: "POST",
                body,
            }),
        }),
        /* Log out */
        logOut: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "GET",
            }),
        }),
        /* Get User Data */
        getUserData: builder.query({
            query: () => ({ url: "/", method: "GET" }),
        }),
    }),
});

export const {
    useSignInMutation,
    useSignUpMutation,
    useLogOutMutation,
    useGetUserDataQuery,
} = api;
export default api;
