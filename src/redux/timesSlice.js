import { createSlice } from "@reduxjs/toolkit";

const timesSlice = createSlice({
    name: 'times',
    initialState:{
        times: {
            questionsAnswered: null,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        getTimesStart: (state) => {
            state.times.isFetching = true;
        },
        getTimesSuccess: (state, action) => {
            state.times.isFetching = false;
            state.times.questionsAnswered = action.payload;
        },
        getTimesFailed: (state) => {
            state.times.isFetching = false;
            state.times.error = true;
        }
    }
})

export const {
    getTimesStart,
    getTimesSuccess,
    getTimesFailed
} = timesSlice.actions;

export default timesSlice.reducer;