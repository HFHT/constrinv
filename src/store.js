import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import navigationReducer from './features/navigation/navigationSlice'
import userReducer from './features/user/userSlice'
import badgesReducer from './features/badges/badgesSlice'
import locationsReducer from './features/locations/locationsSlice'
import { mongoDBApi } from './services/rtkquery/MongoDB'
import { graphApi } from './services/rtkquery/GraphApi'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navigation: navigationReducer,
    user: userReducer,
    badges: badgesReducer,
    locations: locationsReducer,
    [mongoDBApi.reducerPath]: mongoDBApi.reducer,
    [graphApi.reducerPath]: graphApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(mongoDBApi.middleware).concat(graphApi.middleware)
})