
import { createSlice } from "@reduxjs/toolkit"
// all functions and keys are predefined
// create slice
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    // actions
    reducers: {
        // action to increment state
        increment: (state) => {
            state.value += 1
        },
        // action to decrement state
        decrement: (state) => {
            state.value -= 1
        },
        // action to reset state
        reset: (state) => {
            state.value = 0
        },
        // action to increment state by range
        incrementByRange: (state, action) => {
            state.value += action.payload
    }
}
})

// actions are neede for components to update state
export const { increment, decrement, reset,incrementByRange } = counterSlice.actions
// reducers are needed for store to update state
export default counterSlice.reducer  