import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
    name: "money",
    initialState: [{balance: 0}]
    ,
    reducers: {
        balancePlus(state, action){
            state.balance = state.balance + action.payload
        }
    }
})

export const { balancePlus } = balanceSlice.actions
export default balanceSlice.reducer