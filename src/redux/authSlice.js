import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    role: null
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        authorize(state, action) {
            state.isAuth = true;
            state.role = action.payload
        },
        unauthorize(state) {
            state.isAuth = false;
            state.role = null;
        }
    }
})
export default authSlice.reducer;
export const {authorize, unauthorize} = authSlice.actions;
