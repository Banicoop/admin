import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from './slice/authSlice';
import cellReducer from './slice/cellSlice';


const rootReducer = combineReducers({
    auth: authReducer,
    cell: cellReducer
})


const store = configureStore({
    reducer: rootReducer
})

export type Dispatch = typeof store.dispatch;
export default store;
