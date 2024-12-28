import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SERVER from "../../utils/server";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastOptions";



interface AdminState {
    allAdmin: any[];
    admin: {};
    status:  'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    allAdmin: [],
    admin: {},
    status: 'idle'
} as AdminState;


export const sendInvite = createAsyncThunk(
    'admin/sendInvite',
    async ({admin, adminId}: {admin:any, adminId: string | null}, { rejectWithValue }) => {
        try {
            const response = await SERVER.post(`admin/auth/create?adminId=${adminId}`, admin);
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
            if(response.data){
                window.location.replace('/auth/welcome')
            }
            return response.data;
        } catch (error: any) {
            console.log(error.response)
            return rejectWithValue(error)
        }
    }
)


export const getAllAdmin = createAsyncThunk(
    'allAdmin/getAllAdmin', 
    async (_, { rejectWithValue }) => {
        try {
            const response = await SERVER.get('admin/getAll');
            return response.data;
        } catch (error) {
            console.log(error)
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
            toast.success('Registration successful, please Login to access your dashboard', { ...toastOptions })
        })
        builder.addCase(registerAdmin.rejected, (state, action) => {
            state.status = 'failed';
            toast.error('Failed to add admin, please try again later', { ...toastOptions })
        })


        builder.addCase(getAllAdmin.pending, (state, action) => {
             state.status = 'pending'
        })
        builder.addCase(getAllAdmin.fulfilled, (state, action) => {
            state.status = 'failed';
            state.allAdmin = action.payload
        })
        builder.addCase(getAllAdmin.rejected, (state, action) => {
            state.status = 'succeeded'
            // state.allAdmin = 
        })
    }
})

export default adminSlice.reducer;
