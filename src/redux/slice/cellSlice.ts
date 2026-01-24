import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import SERVER from "../../utils/server";
import { toast } from "react-toastify";
import { toastOptions } from "../../helpers/toastOptions";


interface CellState {
    entities: any[];
    status: 'idle' | 'pending' | 'succeeded' | 'failed'
}


const initialState = {
    entities: [] as any[],
    status: 'idle',
} as CellState


export const createCell = createAsyncThunk(
    'cell/createCell',
    async (cell: {}, { rejectWithValue }) => {
        try {
            const response = await SERVER.post('admin/contribution/cells', cell);

            console.log(response.data)
            // return response.data.cells;
        } catch (error: any) {
            const err = error?.response?.data?.message || 'Something went wrong!'
            toast.error(`${err}`, {...toastOptions})
            return rejectWithValue(error.response.data)
        }
    }
)


export const getCells = createAsyncThunk(
    'cell/getCells',
    async (_, {rejectWithValue}) => {
        try {
            const response = await SERVER.get('admin/contribution/cells');
            const cells = Array.isArray(response?.data?.cells) ? response.data.cells : [];

            const sortedCells = cells.sort(
                (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
            return sortedCells ;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


export const getCellDetails = createAsyncThunk(
    'cell/getCellDetails',
    async ({ Id }: {  Id: string | null }, { rejectWithValue }) => {
        try {
            const response = await SERVER.get(`admin/contribution/cells/${Id}`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Failed to fetch cell details');
        }
    }
);


export const deleteCell = createAsyncThunk(
    'cell/deleteCell',
    async ({Id}: {Id: string}, { rejectWithValue }) => {
        try {
            await SERVER.delete(`admin/contribution/cells/${Id}`);
        } catch (error: any) {
            const err = error?.response?.data?.message;
            toast.error(`${err}`, {...toastOptions})
            return rejectWithValue('Failed to delete cell');
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
            state.entities.push(action.payload); 
            toast.success('Contribution cell successfully created', {...toastOptions})
        })
        builder.addCase(createCell.rejected, (state, action) => {
            state.status = 'failed';
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
        .addCase(getCellDetails.pending, (state) => {
            state.status = 'pending';
        })
        .addCase(getCellDetails.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.entities = action.payload;
        })
        .addCase(getCellDetails.rejected, (state) => {
            state.status = 'failed';
            toast.error('Failed to fetch cell details', { ...toastOptions });
        });



        builder
        .addCase(deleteCell.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(deleteCell.fulfilled, (state, action) => {
            state.status = 'succeeded';
            const cellId = action.meta.arg.Id;

            state.entities = state.entities.filter((cell: any) => cell._id !== cellId);
            toast.success('Cell has been deleted successfully', { ...toastOptions });
        })
        .addCase(deleteCell.rejected, (state, action) => {
            state.status = 'failed';
        });
    }
})


export const { setCell } = cellSlice.actions;
export default cellSlice.reducer;
