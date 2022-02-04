import { createSlice } from "@reduxjs/toolkit";
import newsData from '../utils/newsData';

const initialState = {
    approvedNews: newsData,
    newsForApprove: []
}

const newsSlice = createSlice({
    name: 'newsSlice',
    initialState,
    reducers: {
        addNewByUser(state, action) {
            state.newsForApprove.push(action.payload);
        },
        approveNewByAdmin(state, action) {
            const idx = state.newsForApprove.findIndex(item => item.id === action.payload);
            state.approvedNews.push(state.newsForApprove[idx]);
            state.newsForApprove.splice(idx, 1);
        },
        disapproveNewByAdmin(state, action) {
            const idx = state.newsForApprove.findIndex(item => item.id === action.payload);
            state.newsForApprove.splice(idx, 1);
        }
    }
})
export default newsSlice.reducer;
export const {addNewByUser, approveNewByAdmin, disapproveNewByAdmin} = newsSlice.actions;
