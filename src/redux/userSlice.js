import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: {
            userInfo: null,
            isFetching: false,
            error: false
        },
        changeUserInfo:{
            newInfo: null,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        getUserInfoStart: (state) => {
            state.user.isFetching = true;
        },
        getUserInfoSuccess: (state, action) => {
            state.user.isFetching = false;
            state.user.userInfo = action.payload;
        },
        getUserInfoFailed: (state) => {
            state.user.isFetching = false;
            state.user.error = true;
        },
        changeUserInfoStart: (state) => {
            state.changeUserInfo.isFetching = true;
        },
        changeUserInfoSuccess: (state, action) => {
            state.changeUserInfo.isFetching = false;
            state.changeUserInfo.newInfo = action.payload;
            state.changeUserInfo.error = false;
        },
        changeUserInfoFailed: (state) => {
            state.changeUserInfo.isFetching = false;
            state.changeUserInfo.error = true;
        },
    }
})

export const {
    getUserInfoStart,
    getUserInfoSuccess,
    getUserInfoFailed,
    changeUserInfoStart,
    changeUserInfoSuccess,
    changeUserInfoFailed
} = userSlice.actions;

export default userSlice.reducer;