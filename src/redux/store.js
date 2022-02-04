import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {newsSlice, authSlice},
    devTools: true
})
export default store;