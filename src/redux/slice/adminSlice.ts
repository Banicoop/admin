import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SERVER from "../../utils/server";
import { toast } from "react-toastify";
import { toastOptions } from "../../helpers/toastOptions";



interface AdminState {
    adminId: string | null;
    allAdmin: any[];
    admin: {};
    status:  'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
    adminId: null,
    allAdmin: [],
    admin: {},
    status: 'idle'
} as AdminState;


export const sendInvite = createAsyncThunk(
    'admin/sendInvite',
    async ({admin, adminId}: {admin:any, adminId?: string | null}, { rejectWithValue }) => {
        try {
            // const response = await SERVER.post(`admin/auth/create?adminId=${adminId}`, admin);

            const response = await SERVER.post('admin/auth/create', admin)

            return response.data
        } catch (error: any) {
            const err = error?.response?.data?.message;
            toast.error(`${err}`, {...toastOptions})
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
            const err = error?.response?.data?.message;
            toast.error(`${err}`, {...toastOptions})
            return rejectWithValue(error)
        }
    }
)


export const getAllAdmin = createAsyncThunk(
    'allAdmin/getAllAdmin', 
    async (_, { rejectWithValue }) => {
        try {
            const response = await SERVER.get('admin/getAll');
            // return response.data;
            return Array.isArray(response.data) ? response.data : [];
        } catch (error) {
            console.log(error)
            return rejectWithValue(error)
        }
    }
)


export const changeStatus = createAsyncThunk(
    'admin/changeStatus',
    async ({ id, disabled }: { id: string; disabled: boolean }, { rejectWithValue }) => {
        try {
            const status = disabled ? "active" : "inactive"; 
                await SERVER.put(`admin/update/status/${id}`, { status });
            
                toast.success('Admin status updated successfully', {...toastOptions})
            return { id, disabled }; 
        } catch (error: any) {
            const err = error.response.data.messgae;

            toast.error(`${err}`, {...toastOptions})
            return rejectWithValue(error.response.data);
        }
    }
);



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
            // toast.error('Failed to add admin, please try again later', { ...toastOptions })
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
            // toast.error('Failed to add admin, please try again later', { ...toastOptions })
        })


        builder.addCase(getAllAdmin.pending, (state, action) => {
             state.status = 'pending'
        })
        builder.addCase(getAllAdmin.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.allAdmin = action.payload
        })
        builder.addCase(getAllAdmin.rejected, (state, action) => {
            state.status = 'failed'
        })


        builder.addCase(changeStatus.pending, (state, action) => {
            state.status = 'pending'
       })
       builder.addCase(changeStatus.fulfilled, (state, action) => {
           state.status = 'succeeded';
           if (Array.isArray(state.allAdmin)) {
            state.allAdmin = state.allAdmin.map(admin =>
                admin.id === action.payload.id
                    ? { ...admin, disabled: action.payload.disabled }
                    : admin
            );
        }
       })
       builder.addCase(changeStatus.rejected, (state, action) => {
           state.status = 'failed'
       })
    }
})

export default adminSlice.reducer;
