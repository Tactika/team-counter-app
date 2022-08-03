import { createSlice } from "@reduxjs/toolkit";
import { decrement } from "../counter/counterSlice";

const initialState = {
    value: 0,
    status: 'idle'
}

export const altCounterSlice = createSlice({
    name: 'altcounter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementAmountBy: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementAmountBy } = altCounterSlice.actions

export default altCounterSlice.reducer