import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";


// configureStore is a predefined fn to create store & reducer is a predefinrd key to hold reducer to update state in store
export const store =configureStore(
    {
        reducer:{
            counterReducer:CounterSlice
        }
    }
)