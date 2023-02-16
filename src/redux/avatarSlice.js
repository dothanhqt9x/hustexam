import { createSlice } from "@reduxjs/toolkit";

const avatarSlice = createSlice({
    name: 'avatar',
    initialState:{
        uploadAvatar: {
            success: false,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        uploadAvatarStart: (state) => {
            state.uploadAvatar.isFetching = true;
        },
        uploadAvatarSuccess: (state) => {
            state.uploadAvatar.isFetching = false;
            state.uploadAvatar.error = false;
            state.uploadAvatar.success = true;
        },
        uploadAvatarFailed: (state) => {
            state.uploadAvatar.isFetching = false;
            state.uploadAvatar.success = false;
            state.uploadAvatar.error = true;
        }
    }
})

export const {
    uploadAvatarStart,
    uploadAvatarSuccess,
    uploadAvatarFailed
} = avatarSlice.actions;

export default avatarSlice.reducer;