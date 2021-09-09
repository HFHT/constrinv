import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mainCat: null,
  subCat: null,
  filter: null,
  navOpen: false   
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setMainCat: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.mainCat = action.payload
    },
    setSubCat: (state, action) => {
      state.subCat = action.payload
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    setNavOpen: (state, action) => {
      state.navOpen = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMainCat, setSubCat, setFilter, setNavOpen } = navigationSlice.actions

export default navigationSlice.reducer