import { createSlice } from "@reduxjs/toolkit";

const historySlice = createSlice({
    name: 'history',
    initialState:{
        history: {
            list: null,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        getHistoryStart: (state) => {
            state.history.isFetching = true;
        },
        getHistorySuccess: (state, action) => {
            state.history.isFetching = false;
            state.history.list = action.payload;
        },
        getHistoryFailed: (state) => {
            state.history.isFetching = false;
            state.history.error = true;
        }
    }
})

export const {
    getHistoryStart,
    getHistorySuccess,
    getHistoryFailed
} = historySlice.actions;

export default historySlice.reducer;