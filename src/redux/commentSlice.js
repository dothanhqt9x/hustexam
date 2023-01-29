import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: 'comment',
    initialState:{
        addComment: {
            success: false,
            isFetching: false,
            error: false
        },
        replyComment: {
            success: false,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        addCommentStart: (state) => {
            state.addComment.isFetching = true;
        },
        addCommentSuccess: (state) => {
            state.addComment.isFetching = false;
            state.addComment.error = false;
            state.addComment.success = true;
        },
        addCommentFailed: (state) => {
            state.addComment.isFetching = false;
            state.addComment.success = false;
            state.addComment.error = true;
        },
        replyCommentStart: (state) => {
            state.replyComment.isFetching = true;
        },
        replyCommentSuccess: (state) => {
            state.replyComment.isFetching = false;
            state.replyComment.error = false;
            state.replyComment.success = true;
        },
        replyCommentFailed: (state) => {
            state.replyComment.isFetching = false;
            state.replyComment.success = false;
            state.replyComment.error = true;
        },
    }
})

export const {
    addCommentStart,
    addCommentSuccess,
    addCommentFailed,
    replyCommentStart,
    replyCommentFailed,
    replyCommentSuccess
} = commentSlice.actions;

export default commentSlice.reducer;