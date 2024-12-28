import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SERVER from "../../utils/server";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastOptions";


interface LoanState {
    loans: any[];
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
}


const initialState: LoanState = {
    loans: [],
    status: "idle",
} 


const loanSlice = createSlice({

    name: 'loan',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        // builder
    }
})