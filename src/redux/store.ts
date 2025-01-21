import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from './slice/authSlice';
import cellReducer from './slice/cellSlice';
import adminReducer from './slice/adminSlice';
import loanReducer from './slice/loanSlice'


 const rootReducer = combineReducers({
    auth: authReducer,
    cell: cellReducer,
    admin: adminReducer,
    loan: loanReducer
})



export const store = configureStore({
    reducer: rootReducer 
    
})

export type Dispatch = typeof store.dispatch;

