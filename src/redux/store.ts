import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from './slice/authSlice';


const rootReducer = combineReducers({
    auth: authReducer
})


const store = configureStore({
    reducer: rootReducer
})

export type Dispatch = typeof store.dispatch;
export default store;
