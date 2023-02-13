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
        },
        postDetail: {
            postInfo: null,
            isFetching: false,
            error: false
        },
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
        getPostDetailStart: (state) => {
            state.postDetail.isFetching = true;
        },
        getPostDetailSuccess: (state, action) => {
            state.postDetail.isFetching = false;
            state.postDetail.postInfo = action.payload;
        },
        getPostDetailFailed: (state) => {
            state.postDetail.isFetching = false;
            state.postDetail.error = true;
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
        }
    }
})

export const {
    getPostsStart,
    getPostsSuccess,
    getPostsFailed,
    addPostStart,
    addPostSuccess,
    addPostFailed,
    getPostDetailStart,
    getPostDetailSuccess,
    getPostDetailFailed,
} = postSlice.actions;

export default postSlice.reducer;