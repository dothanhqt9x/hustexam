import { createSlice } from "@reduxjs/toolkit";

const submitSlice = createSlice({
    name: 'submit',
    initialState:{
        answers: {
            success: false,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        submitStart: (state) => {
            state.answers.isFetching = true;
        },
        submitSuccess: (state) => {
            state.answers.isFetching = false;
            state.answers.error = false;
            state.answers.success = true;
        },
        submitFailed: (state) => {
            state.answers.isFetching = false;
            state.answers.error = true;
            state.answers.success = false;
        }
    }
})

export const {
    submitStart,
    submitSuccess,
    submitFailed
} = submitSlice.actions;

export default submitSlice.reducer;