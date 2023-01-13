import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name: 'question',
    initialState:{
        questions: {
            allQuestions: null,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        getQuestionsStart: (state) => {
            state.questions.isFetching = true;
        },
        getQuestionsSuccess: (state, action) => {
            state.questions.isFetching = false;
            state.questions.allQuestions = action.payload;
        },
        getQuestionsFailed: (state) => {
            state.questions.isFetching = false;
            state.questions.error = true;
        }
    }
})

export const {
    getQuestionsStart,
    getQuestionsSuccess,
    getQuestionsFailed
} = questionSlice.actions;

export default questionSlice.reducer;