import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  locName: 'All',
  shipName: null
}

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setLocName: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.locName = action.payload
    },
    setShipName: (state, action) => {
        state.shipName = action.payload
      }    
  },
})

// Action creators are generated for each case reducer function
export const { setLocName, setShipName } = locationsSlice.actions

export default locationsSlice.reducer