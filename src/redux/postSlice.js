import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'post',
    initialState:{
        posts: {
            allPosts: null,
            isFetching: false,
            error: false,
        },
        addPost: {
            success: false,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        getPostsStart: (state) => {
            state.posts.isFetching = true;
        },
        getPostsSuccess: (state, action) => {
            state.posts.isFetching = false;
            state.posts.allPosts = action.payload;
        },
        getPostsFailed: (state) => {
            state.posts.isFetching = false;
            state.posts.error = true;
        },
        addPostStart: (state) => {
            state.addPost.isFetching = true;
        },
        addPostSuccess: (state, action) => {
            state.addPost.isFetching = false;
            state.addPost.error = false;
            state.addPost.success = true;
        },
        addPostFailed: (state) => {
            state.addPost.isFetching = false;
            state.addPost.success = false;
            state.addPost.error = true;
        },
    }
})

export const {
    getPostsStart,
    getPostsSuccess,
    getPostsFailed,
    addPostStart,
    addPostSuccess,
    addPostFailed
} = postSlice.actions;

export default postSlice.reducer;