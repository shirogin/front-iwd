import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const api = createApi({
    reducerPath: "local",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3002/",
        credentials: "include",
    }),
    endpoints: (builder) => ({
        /* Sign In / Up*/
        checkLocals: builder.mutation({
            query: ({ body }) => ({
                url: "/",
                method: "GET",
                body,
            }),
        }),
        addOffline: builder.mutation({
            query: ({ body }) => ({
                url: "/signup",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useAddOffline, useCheckLocals } = api;
export default api;
