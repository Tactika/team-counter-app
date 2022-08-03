import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    status: 'idle'
}

export const altCounterSlice = createSlice({
    name: 'altcounter',
    initialState,
    reducers: {
        altincrement: state => {
            state.value += 1
        },
        altdecrement: state => {
            state.value -= 1
        },
        incrementAmountBy: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { altincrement, altdecrement, incrementAmountBy } = altCounterSlice.actions

export default altCounterSlice.reducer