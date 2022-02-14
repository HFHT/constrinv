import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isEditModalOpen: false,
  isImgEditModalOpen: false,
  editCardContents: null
}

export const editModalSlice = createSlice({
  name: 'editModal',
  initialState,
  reducers: {
    setEditModalOpen: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isEditModalOpen = action.payload
    },
    setImgEditModalOpen: (state, action) => {
      state.isImgEditModalOpen = action.payload
    },
    setEditCardContents: (state, action) => {
      state.editCardContents = action.payload
      state.isEditModalOpen = true
    }
  },
})

// Action creators are generated for each case reducer function
export const { setEditModalOpen, setImgEditModalOpen, setEditCardContents } = editModalSlice.actions

export const selectModal = (state) => state.editModal.present.editCardContents
export const selectModalOpen = (state) => state.editModal.present.isEditModalOpen

export default editModalSlice.reducer