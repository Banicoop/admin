import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SERVER from "../../utils/server";
import { toast } from "react-toastify";
import { toastOptions } from "../../utils/toastOptions";


interface CellState {
    entities: any;
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
            return res.data;
        } catch (error: any) {
            return rejectWithValue(error.res.data)
        }
    }
)


export const getCells = createAsyncThunk(
    'cell/getCells',
    async (_, {rejectWithValue}) => {
        try {
            const res = await SERVER.get('');
            return res.data
        } catch (error) {
            return rejectWithValue(error)
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
            state.status = 'pending';
        })
        builder.addCase(createCell.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.entities = action.payload;
            toast.success('Contribution cell successfully created', {...toastOptions})
        })
        builder.addCase(createCell.rejected, (state, action) => {
            state.status = 'failed';
            toast.error('Failed to create contribution crll', {...toastOptions})
        })


        builder.addCase(getCells.pending, (state) => {
            state.status = 'pending';
        })
        builder.addCase(getCells.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.entities = action.payload;
        })
        builder.addCase(getCells.rejected, (state) => {
            state.status = 'failed';
        })
    }
})


export const { setCell } = cellSlice.actions;
export default cellSlice.reducer;
