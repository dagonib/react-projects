import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from'redux-persist'
import storage from'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'
import userReducer from './user/user.slice.js'

const rootReducer = combineReducers({
    user: userReducer
})

const PersistConfig = {
    key: 'root',
    storage,
    version: 1
}

const persistedReducer = persistReducer(PersistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export const persistor = persistStore(store)