import {configureStore, combineReducers} from "@reduxjs/toolkit"
import  accountBalance  from "./slice/account"
import userReducer from "./slice/userSlice"
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from 'redux-persist'

const rootReducer = combineReducers({
    user: userReducer,
    users: accountBalance
  });


  const persistConfig = {
    key: 'root',
    storage,
    version: 1,
  };


  const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store =  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export const persistor = persistStore(store);