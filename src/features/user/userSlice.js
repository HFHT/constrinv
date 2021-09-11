import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  skip: true,
  authToken: null,
  profilePicture: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload
    },
    setProfilePicture: (state, action) => {
      state.profilePicture = action.payload
    },    
    setSkip: (state, action) => {
      state.skip = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setAuthToken, setSkip, setProfilePicture } = userSlice.actions

export default userSlice.reducer