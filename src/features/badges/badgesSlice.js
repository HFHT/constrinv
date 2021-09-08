import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    queues: {
    QueuePrintBarCode: 0,
    QueueOrder: 0,
    QueueShipment: 0,
    QueuePallet: 0
    }
}

export const badgesSlice = createSlice({
    name: 'badges',
    initialState,
    reducers: {
        setBarCode: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.queues.QueuePrintBarCode = action.payload
        },
        setOrder: (state, action) => {
            state.queues.QueueOrder = action.payload
        },
        setShipment: (state, action) => {
            state.queues.QueueShipment = action.payload
        },
        setPallet: (state, action) => {
            state.queues.QueuePallet = action.payload
        },
        setAll: (state, action) => {
            state.queues = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setBarCode, setOrder, setShipment, setPallet, setAll } = badgesSlice.actions

export default badgesSlice.reducer