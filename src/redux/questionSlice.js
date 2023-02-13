import { createSlice } from "@reduxjs/toolkit";

const questionSlice = createSlice({
    name: 'question',
    initialState:{
        questions: {
            allQuestions: null,
            isFetching: false,
            error: false,
        },
        addQuestion: {
            isFetching: false,
            success: false,
            error: false
        },
        questionsAdmin: {
            allQuestions: null,
            isFetching: false,
            error: false,
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
        },
        getQuestionsAdminStart: (state) => {
            state.questionsAdmin.isFetching = true;
        },
        getQuestionsAdminSuccess: (state, action) => {
            state.questionsAdmin.isFetching = false;
            state.questionsAdmin.allQuestions = action.payload;
        },
        getQuestionsAdminFailed: (state) => {
            state.questionsAdmin.isFetching = false;
            state.questionsAdmin.error = true;
        },
        addQuestionStart: (state) => {
            state.addQuestion.isFetching = true;
        },
        addQuestionSuccess: (state) => {
            state.addQuestion.isFetching = false;
            state.addQuestion.error = false;
            state.addQuestion.success = true;
        },
        addQuestionFailed: (state) => {
            state.addQuestion.isFetching = false;
            state.addQuestion.error = true;
            state.addQuestion.success = false;
        },
    }
})

export const {
    getQuestionsStart,
    getQuestionsSuccess,
    getQuestionsFailed,
    addQuestionStart,
    addQuestionSuccess,
    addQuestionFailed,
    getQuestionsAdminStart,
    getQuestionsAdminSuccess,
    getQuestionsAdminFailed
} = questionSlice.actions;

export default questionSlice.reducer;