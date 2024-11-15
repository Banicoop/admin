import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SERVER from "../../utils/server";
// import { toast } from "react-toastify";
// import { toastOptions } from "../../utils/toastOptions";


interface CellState {
    entities: {}
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
}


const initialState = {
    entities: {},
    status: 'idle',
} as CellState


export const createCell = createAsyncThunk(
    'cell/createCell',
    async (cell: {}, { rejectWithValue }) => {
        try {
            const res = await SERVER.post('admin/contribution/cell/create', cell);
            console.log(res.data, 'Response!!')
        } catch (error: any) {
            return rejectWithValue(error.res.data)
        }
    }
)


const cellSlice = createSlice({
    name: 'cell',
    initialState,
    reducers: {
        setCell: (state, action) => {
            state.entities = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createCell.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(createCell.fulfilled, (state, action) => {
            state.status = 'succeeded'
        })
        builder.addCase(createCell.rejected, (state, action) => {
            state.status = 'failed'
        })
    }
})


export const { setCell } = cellSlice.actions;
export default cellSlice.reducer;
