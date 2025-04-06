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
            return rejectWithValue(error)
        }
    }
)


export const getPendingLoans = createAsyncThunk(
    'loan/getPendingLoan',
    async (_, { rejectWithValue })  => {
        try {
            const res = await SERVER.get('admin/loans?status=pending');
            return res.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)



export const getLoanDetails = createAsyncThunk(
    'loan/getLoanDetails', 
    async (Id: string, {rejectWithValue}) => {
        try {
            const res = await SERVER.get(`admin/loans/${Id}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const approveLoan = createAsyncThunk(
    'loan/approveLoan', 
    async (loanId: string, { rejectWithValue }) => {
        try {
            const res = await SERVER.patch(`admin/loans/${loanId}/approve`);
            return { loanId, updatedLoan: res.data };
        } catch (error: any) {
            const err = error?.response?.data?.message
            toast.error(`${err}`, {...toastOptions})
            return rejectWithValue(error);
        }
    }
);


export const rejectLoan = createAsyncThunk(
    'loan/rejectLoan', 
    async ({loanId, reason}: {loanId: string, reason: string}, { rejectWithValue }) => {
        try {
            const res = await SERVER.patch(`admin/loans/${loanId}/reject`, reason);
            return { loanId, updatedLoan: res.data };
        } catch (error: any) {
            const err = error?.response?.data?.message
            toast.error(`${err}`, {...toastOptions})
            return rejectWithValue(error);
        }
    }
);



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


        builder.addCase(getPendingLoans.pending, (state) => {
            state.status = 'pending';
        })
        builder.addCase(getPendingLoans.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.loans = action.payload;
        })
        builder.addCase(getPendingLoans.rejected, (state) => {
            state.status = 'failed';
        })


        builder.addCase(getLoanDetails.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(getLoanDetails.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.loans = [action.payload]; 
        });
        builder.addCase(getLoanDetails.rejected, (state) => {
            state.status = 'failed';
        });

        builder.addCase(approveLoan.pending, (state) => {
            state.status = 'pending';
        })
        builder.addCase(approveLoan.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.loans = state.loans.map(loan =>
              loan.payload.loan._id === action.meta.arg ? { ...loan, payload: { ...loan.payload, loan: { ...loan.payload.loan, approvalStatus: 'approved' } } } : loan
            );
            toast.success('Loan accepted successfully', {...toastOptions})

            // state.loans = state.loans.map(loan => 
            //     loan._id === action.payload.loanId ? action.payload.updatedLoan : loan
            // );
            // .addCase(approveLoan.fulfilled, (state, action) => {
                //   })
        });
        builder.addCase(rejectLoan.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.loans = state.loans.map(loan =>
                loan.payload.loan._id === action.meta.arg ? { ...loan, payload: { ...loan.payload, loan: { ...loan.payload.loan, approvalStatus: 'rejected' } } } : loan
              )
            // state.loans = state.loans.map(loan => 
            //     loan._id === action.payload.loanId ? action.payload.updatedLoan : loan
            // );
            toast.success('Loan rejected successfully', {...toastOptions})
        });
    }
})

export const { setLoan } = loanSlice.actions;
export default loanSlice.reducer;
