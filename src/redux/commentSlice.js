import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: 'comment',
    initialState:{
        // comment: {
        //     allPosts: null,
        //     isFetching: false,
        //     error: false,
        // },
        addComment: {
            success: false,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        // getPostsStart: (state) => {
        //     state.posts.isFetching = true;
        // },
        // getPostsSuccess: (state, action) => {
        //     state.posts.isFetching = false;
        //     state.posts.allPosts = action.payload;
        // },
        // getPostsFailed: (state) => {
        //     state.posts.isFetching = false;
        //     state.posts.error = true;
        // },
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
    }
})

export const {
    // getPostsStart,
    // getPostsSuccess,
    // getPostsFailed,
    addCommentStart,
    addCommentSuccess,
    addCommentFailed
} = commentSlice.actions;

export default commentSlice.reducer;