import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'

const rootReducer = combineReducers({
    todo: todoReducer
})

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store