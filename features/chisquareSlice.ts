import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { Method, Value } from "../types/methods"

const initialState: Method = {
    data: []
}

export const chisquareSlice = createSlice({
    name: 'chisquare',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<number[]>) => {
            state.data = action.payload
        },
        setValue: (state, action: PayloadAction<Value>) => {
            state.data[action.payload.index] = action.payload.value
        }

    }
})


export const { setData } = chisquareSlice.actions;
export default chisquareSlice.reducer;