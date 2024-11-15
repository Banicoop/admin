import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SERVER from "../../utils/server";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastOptions";



interface UsersState {
    entities: {}
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
}


const initialState = {
    entities: {},
    status: 'idle',
} as UsersState


export const login = createAsyncThunk(
    'auth/login',
    async (user: {}, { rejectWithValue }) => {
        try {
            const response = await SERVER.post('admin/auth/login', user);
            localStorage.setItem('loginData', JSON.stringify(response.data));
            window.location.replace('/auth/verification')
            return response.data
        } catch (error:any) {
            return rejectWithValue(error.response.data)
        }
    },
)


export const sendOtp = createAsyncThunk('auth/otp', 
    async (token: {}, { rejectWithValue }) => {
        try {
            const res = await SERVER.post('admin/auth/verifyToken', token);
            if(res.data.message === 'OTP verified'){
                console.log(res.data);
                localStorage.setItem('user', JSON.stringify(res.data));
                window.location.replace('/auth/verified')
            }
        } catch (error:any) {
            console.log(error)
            return rejectWithValue(error.response.data)
        }
    }
)
  

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
			state.entities = action.payload;
		}
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.status = 'succeeded'
            toast.success('OTP sent', { ...toastOptions })
        })
        builder.addCase(login.rejected, (state, action) => {
            state.status = 'failed';
            toast.error('Invalid credentials', { ...toastOptions })
        })

        //otp
        builder.addCase(sendOtp.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(sendOtp.fulfilled, (state, action) => {
            state.status = 'succeeded';
            toast.success('OTP verified successfully!', { ...toastOptions })
        })
        builder.addCase(sendOtp.rejected, (state, action) => {
            state.status = 'failed';
            toast.error('OTP not valid or expired', { ...toastOptions })
        })
    },
})

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
