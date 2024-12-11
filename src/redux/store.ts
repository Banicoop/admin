import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'; 
import { persistStore, persistReducer } from 'redux-persist';
import authReducer from './slice/authSlice';
import cellReducer from './slice/cellSlice';
import adminReducer from './slice/adminSlice'


const persistConfig = {
    key: 'root',
    storage,
  };
  


const rootReducer = combineReducers({
    auth: authReducer,
    cell: cellReducer,
    admin: adminReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer
})

export type Dispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
