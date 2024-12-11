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
            const response = await SERVER.post('admin/contribution/cell/create', cell);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)


export const getCells = createAsyncThunk(
    'cell/getCells',
    async (_, {rejectWithValue}) => {
        try {
            const response = await SERVER.get('admin/contribution/cell/all?type=&startDate&endDate&isActive=&available=true');
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const fetchCellDetail = createAsyncThunk(
    'cellDetail/fetchCellDetail',
    async ({ cellId, userId }: { cellId: string; userId: string | null }, { rejectWithValue }) => {
        try {
            const response = await SERVER.get(`admin/contribution/cell/single?cellId=${cellId}&adminId=${userId}`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Failed to fetch cell details');
        }
    }
);


export const deleteCell = createAsyncThunk(
    'cell/deleteCell',
    async ({cellId}: {cellId: string}, { rejectWithValue }) => {
        try {
            await SERVER.delete(`admin/contribution/cell?id=${cellId}`);

        } catch (error: any) {
            console.log(error)
            return rejectWithValue(error.response?.data || 'Failed to delete cell');
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
            toast.error('Failed to create contribution cell', {...toastOptions})
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


        builder
        .addCase(fetchCellDetail.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(fetchCellDetail.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.entities = action.payload;
        })
        .addCase(fetchCellDetail.rejected, (state) => {
            state.status = 'failed';
            toast.error('Failed to fetch cell details', { ...toastOptions });
        });



        builder
        .addCase(deleteCell.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(deleteCell.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.entities = action.payload;
            toast.success('Cell have been deleted successfully', { ...toastOptions });
        })
        .addCase(deleteCell.rejected, (state) => {
            state.status = 'failed';
            toast.error('Unable to delete cell, please try again', { ...toastOptions });
        });
    }
})


export const { setCell } = cellSlice.actions;
export default cellSlice.reducer;
