import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'; 
import { persistStore, persistReducer } from 'redux-persist';
import authReducer from './slice/authSlice';
import cellReducer from './slice/cellSlice';


const persistConfig = {
    key: 'root',
    storage,
  };
  


const rootReducer = combineReducers({
    auth: authReducer,
    cell: cellReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer
})

export type Dispatch = typeof store.dispatch;
export const persistor = persistStore(store);
export default store;
