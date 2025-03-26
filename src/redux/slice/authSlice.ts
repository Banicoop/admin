import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SERVER from "../../utils/server";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastOptions";



interface UsersState {
    user?: any;
    credentials?: any;
    accessToken: string | null;
    refreshToken: string | null;
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
}


const initialState: UsersState = {
    user: JSON.parse(localStorage.getItem("user") || "null"),
    credentials: {},
    accessToken: localStorage.getItem("token") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    status: "idle",
  };

export const login = createAsyncThunk(
    'auth/login',
    async (credentials: {}, { rejectWithValue }) => {
        try {
            const response = await SERVER.post('admin/auth/login', credentials);
            localStorage.setItem('loginData', JSON.stringify(response.data));
            window.location.replace('/auth/verification');
            return response.data
        } catch (error:any) {
            const err = error.response.data.message;
            toast.error(`${err}`, { ...toastOptions })
            return rejectWithValue(error.response.data)
        }
    },
)


export const verifyLogin = createAsyncThunk('auth/otp', 
    async (user: {}, { rejectWithValue,  dispatch  }) => {
        try {
            const response = await SERVER.post('admin/auth/verifyToken', user);

            if(response.data.message === 'OTP verified'){
                const { accessToken, refreshToken, ...payload } = response.data;


                localStorage.setItem('token', accessToken);
                localStorage.setItem('refreshToken', refreshToken);

                localStorage.setItem('user', JSON.stringify(payload));

                dispatch(setAuth({ user: payload, accessToken, refreshToken }));
                
                window.location.replace('/auth/verified');
            }

            return response.data
        } catch (error:any) {
            console.log(error)
            return rejectWithValue(error.response.data)
        }
    }
)



export const refreshAccessToken = createAsyncThunk(
    'auth/refreshToken',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) throw new Error("No refresh token found");


            const userString =  localStorage.getItem('user');

            const user = userString ? JSON.parse(userString) : null

            const response = await SERVER.post('admin/auth/refresh-access-token', { refreshToken, userId: user?.payload?._id });

            const { accessToken } = response.data;

            localStorage.setItem("token", accessToken);

            dispatch(setAuth({
                user: JSON.parse(localStorage.getItem("user") || "{}"),
                accessToken,
                refreshToken
            }));

            return accessToken;
        } catch (error: any) {
            dispatch(logout()); 
            return rejectWithValue(error.response?.data || "Failed to refresh token");
        }
    }
);



export const forgetPassword = createAsyncThunk(
    'auth/forgetPassword',
    async (credentials: {}, { rejectWithValue }) => {
        try {
            const res = await SERVER.post('admin/auth/forgot-password', credentials);
            if(res.data){
                window.location.replace('/auth/reset-password');
            }
            return res.data;
        } catch (error: any) {
            const err = error.response.data.message;
            toast.error(`${err}`, { ...toastOptions })
            return rejectWithValue(error);
        }
    }
)



export const resetPassword = createAsyncThunk(
    'auth/verifyOtp',
    async (credentials: {}, { rejectWithValue }) => {
        try {
            const res = await SERVER.post('admin/auth/reset-password', credentials);
            if(res.data){
                 window.location.replace('/auth/verified')

            }
            return res.data;
        } catch (error: any) {
            const err = error.response.data.message;
            toast.error(`${err}`, { ...toastOptions })
            return rejectWithValue(error);
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
            state.credentials = action.payload;
            toast.success('OTP sent', { ...toastOptions })
        })
        builder.addCase(login.rejected, (state, action) => {
            state.status = 'failed';
            state.credentials = action.payload;
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

        //refreah access token
        builder.addCase(refreshAccessToken.fulfilled, (state, action) => {
            state.accessToken = action.payload; 
        })
        builder.addCase(refreshAccessToken.rejected, (state, action) => {
            state.accessToken = null;
            state.user = null;
            localStorage.clear();
        })

        
        //forget password
        builder.addCase(forgetPassword.pending, (state, action) => {
            state.status = 'pending';
        })
        builder.addCase(forgetPassword.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.credentials = action.payload; 
            toast.success('OTP sent', { ...toastOptions })
        })
        builder.addCase(forgetPassword.rejected, (state, action) => {
            state.status = 'failed';
        })


        //reset password
        builder.addCase(resetPassword.pending, (state, action) => {
            state.status = 'pending';
        })
        builder.addCase(resetPassword.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.credentials = action.payload; 
            toast.success('Password reset successful', { ...toastOptions })
        })
        builder.addCase(resetPassword.rejected, (state, action) => {
            state.status = 'failed';
        })
    },
})

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
