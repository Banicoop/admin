import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SERVER from "../../utils/server";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastOptions";



interface UsersState {
    user: any;
    accessToken: string | null;
    refreshToken: string | null;
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
}


const initialState: UsersState = {
    user: JSON.parse(localStorage.getItem("loginData") || "{}") || null,
    accessToken: localStorage.getItem("token") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    status: "idle",
  };

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


export const verifyLogin = createAsyncThunk('auth/otp', 
    async (token: {}, { rejectWithValue,  dispatch  }) => {
        try {
            const response = await SERVER.post('admin/auth/verifyToken', token);

            console.log(response.data)

            if(response.data.message === 'OTP verified'){
                const { accessToken, refreshToken, ...payload } = response.data;


                localStorage.setItem('token', accessToken);
                localStorage.setItem('refreshToken', refreshToken);

                dispatch(setAuth({ user: payload, accessToken, refreshToken }));
                console.log(accessToken, refreshToken, payload);
                window.location.replace('/auth/verified');
            }

            return response.data
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
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
          },
          logout: (state) => {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            localStorage.clear();
          },
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

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
