// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const graphApi = createApi({
    reducerPath: 'graphApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://graph.microsoft.com/v1.0`,
        prepareHeaders(headers, { getState }) {
            const authToken = getState().user.authToken
            console.debug('authToken:',authToken)
            if (authToken) {
                headers.set('Authorization', `Bearer ${authToken}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        graphMe: builder.query({
            query: () => '/me',
        }),
        graphMePhoto: builder.query({
            query: () => '/me/photos/48x48/$value',
//            transformResponse: (response) => {
//                console.log('photo:',response)
//                window.URL = window.URL || window.webkitURL
//                window.URL.createObjectURL(response)
//            }
        })
    }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGraphMeQuery, useGraphMePhotoQuery } = graphApi