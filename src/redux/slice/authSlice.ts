import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SERVER from "../../utils/server";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastOptions";



interface UsersState {
    user: any;
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
}


const initialState = {
    user:  localStorage.getItem('token') || null,
    status: 'idle',
} as UsersState


export const login = createAsyncThunk(
    'auth/login',
    async (user: {}, { rejectWithValue }) => {
        try {
            const response = await SERVER.post('admin/auth/login', user);
            localStorage.setItem('loginData', JSON.stringify(response.data));
            window.location.replace('/auth/verification')
            console.log(response.data);
            return response.data
        } catch (error:any) {
            return rejectWithValue(error.response.data)
        }
    },
)


export const verifyLogin = createAsyncThunk('auth/otp', 
    async (token: {}, { rejectWithValue,  dispatch  }) => {
        try {
            const res = await SERVER.post('admin/auth/verifyToken', token);

            if(res.data.message === 'OTP verified'){
                const { accessToken, refreshToken, payload } = res.data;

                localStorage.setItem('token', accessToken);
                localStorage.setItem('refreshToken', refreshToken);

                dispatch(setAuth(payload));
                console.log(accessToken, refreshToken, payload);
                window.location.replace('/auth/verified');
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
			state.user = action.payload;
		}
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.status = 'pending';

        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
            toast.success('OTP sent', { ...toastOptions })
        })
        builder.addCase(login.rejected, (state, action) => {
            state.status = 'failed';
            state.user = action.payload;
            toast.error('Invalid credentials', { ...toastOptions })
        })

        //otp
        builder.addCase(verifyLogin.pending, (state, action) => {
            state.status = 'pending';
            state.user = action.payload;
        })
        builder.addCase(verifyLogin.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
            toast.success('OTP verified successfully!', { ...toastOptions })
        })
        builder.addCase(verifyLogin.rejected, (state, action) => {
            state.status = 'failed';
            toast.error('OTP not valid or expired', { ...toastOptions })
        })
    },
})

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
