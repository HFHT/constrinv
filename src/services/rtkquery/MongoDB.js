// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const mongoDBApi = createApi({
    reducerPath: 'mongoDBApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_AZURE_FUNC_URL}` }),
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
        updateDB: builder.mutation({
            query: (req) => ({
                url: `/api/HFHTMongoAPI?req=${JSON.stringify(req)}`,
                method: 'GET',
              }),
              async onQueryStarted(req, { dispatch, queryFulfilled }) {
                console.log('updateDB', req)
                const reqResult = dispatch(
                    mongoDBApi.util.updateQueryData('getFromDB', 0, (req) => {
                    Object.assign(req, req)
                  })
                )
                try {
                  await queryFulfilled
                } catch {
                  reqResult.undo()
                }
              },
              //invalidatesTags: (result, error, { req }) => [{ req }],
        })       
    }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetBadgeCountsQuery, useGetFromDBQuery, useGetNavigationQuery, useGetOrgProfileQuery, useUpdateDBMutation } = mongoDBApi