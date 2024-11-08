import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SERVER from "../../utils/server";



interface UsersState {
    entities: {}
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
}


const initialState = {
    entities: {},
    status: 'idle',
} as UsersState


const login = createAsyncThunk(
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


const otp = createAsyncThunk('auth/otp', 
    async (token: {}, { rejectWithValue }) => {
        try {
            const res = await SERVER.post('admin/auth/verifyToken', token);
            if(res.data.message === 'OTP verified'){
                localStorage.setItem('user', JSON.stringify(res.data));
                window.location.replace('/auth/verified')
            }
        } catch (error:any) {
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
        })
        builder.addCase(login.rejected, (state, action) => {
            state.status = 'failed'
        })

        //otp
        builder.addCase(otp.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(otp.fulfilled, (state, action) => {
            state.status = 'succeeded'
        })
        builder.addCase(otp.rejected, (state, action) => {
            state.status = 'failed'
        })
    },
})

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
