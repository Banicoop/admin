import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from './slice/authSlice';
import cellReducer from './slice/cellSlice';
import adminReducer from './slice/adminSlice';



 const rootReducer = combineReducers({
    auth: authReducer,
    cell: cellReducer,
    admin: adminReducer
})



export const store = configureStore({
    reducer: rootReducer 
    
})

export type Dispatch = typeof store.dispatch;

