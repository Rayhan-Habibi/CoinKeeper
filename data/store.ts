import { configureStore } from "@reduxjs/toolkit";
import balaceReducer from "./balanceSlice"

export const store =  configureStore({
    reducer: {
        money: balaceReducer
    }
})

export type IRootState = ReturnType<typeof store.getState>