import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SERVER from "../../utils/server";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastOptions";



interface AdminState {
    admin: {};
    status:  'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    admin: {},
    status: 'idle'
} as AdminState;


export const sendInvite = createAsyncThunk(
    'admin/sendInvite',
    async (admin: {}, { rejectWithValue }) => {
        try {
            const response = await SERVER.post('admin/auth/create', admin);
            console.log(response)
            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error)
        }
    }
)


export const registerAdmin = createAsyncThunk(
    'admin/registerAdmin',
    async (admin: {}, { rejectWithValue }) => {
        try {
            const response = await SERVER.post('admin/auth/register', admin);
            return response.data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sendInvite.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(sendInvite.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.admin = action.payload
            toast.success('Invite sent', { ...toastOptions })
        })
        builder.addCase(sendInvite.rejected, (state, action) => {
            state.status = 'failed';
            toast.error('Failed to add admin, please try again later', { ...toastOptions })
        })


        builder.addCase(registerAdmin.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(registerAdmin.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.admin = action.payload
            toast.success('Invite sent', { ...toastOptions })
        })
        builder.addCase(registerAdmin.rejected, (state, action) => {
            state.status = 'failed';
            toast.error('Failed to add admin, please try again later', { ...toastOptions })
        })
    }
})

export default adminSlice.reducer;
