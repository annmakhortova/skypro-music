import { configureStore } from "@reduxjs/toolkit";
import trackReducer from "./slices/trackSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        playlist: trackReducer,
        auth: authSlice,
    }, 
})