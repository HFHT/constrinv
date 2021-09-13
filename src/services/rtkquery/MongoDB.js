// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const mongoDBApi = createApi({
    reducerPath: 'mongoDBApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://hfhtapi.azurewebsites.net` }),
    endpoints: (builder) => ({
        getBadgeCounts: builder.query({
            query: (req) => `/api/HFHTMongoAPI?req=${JSON.stringify(req)}`,
        }),
        getFromDB: builder.query({
            query: (req) => `/api/HFHTMongoAPI?req=${JSON.stringify(req)}`,
        }),
        getNavigation: builder.query({
            query: (req) => `/api/HFHTMongoAPI?req=${JSON.stringify(req)}`,
        }),
        getOrgProfile: builder.query({
            query: (req) => `/api/HFHTMongoAPI?req=${JSON.stringify(req)}`,
        }),        
    }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetBadgeCountsQuery, useGetFromDBQuery, useGetNavigationQuery, useGetOrgProfileQuery } = mongoDBApi