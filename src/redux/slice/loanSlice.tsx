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
} as LoanState




export const getAllLoans = createAsyncThunk(
    'loan/getAllLoans', 
    async (_, { rejectWithValue }) => {
        try {
            const res = await SERVER.get('admin/loans');
            return res.data;
        } catch (error) {
            console.error(error)
        }
    }
)


const loanSlice = createSlice({

    name: 'loan',
    initialState,
    reducers: {
        setLoan: (state, action) => {
            state.loans = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getAllLoans.pending, (state) => {
            state.status = 'pending';
        })
        builder.addCase(getAllLoans.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.loans = action.payload;
        })
        builder.addCase(getAllLoans.rejected, (state) => {
            state.status = 'failed';
        })
    }
})

export const { setLoan } = loanSlice.actions;
export default loanSlice.reducer;
