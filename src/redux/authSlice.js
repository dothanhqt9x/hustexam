import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        login: {
            currentUser: null,
            isFetching: false,
            error: false
        },
        logout: {
            isFetching: false,
            error: false,
        },
        register:{
            isFetching: false,
            error: false,
            success: false
        },
        changePassword: {
            isFetching: false,
            error: false,
            password: null,
        }
    },
    reducers:{
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
        logoutStart: (state) => {
            state.logout.isFetching = true;
        },
        logOutSuccess: (state) => {
            state.logout.isFetching = false;
            state.login.currentUser = null;
            state.logout.error = false;
        },
        logOutFailed: (state) => {
            state.logout.isFetching = false;
            state.logout.error = true;
        },
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess: (state, action) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = true;
        },
        registerFailed: (state) => {
            state.register.isFetching = false;
            state.register.error = true;
            state.register.success = false;
        },
        changePasswordStart: (state) => {
            state.changePassword.isFetching = true;
        },
        changePasswordSuccess: (state, action) => {
            state.changePassword.isFetching = false;
            state.changePassword.password = action.payload;
            state.changePassword.error = false;
        },
        changePasswordFailed: (state) => {
            state.changePassword.isFetching = false;
            state.changePassword.error = true;
        },

    }
})

export const {
    loginStart,
    loginFailed,
    loginSuccess,
    logoutStart,
    logOutSuccess,
    logOutFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    changePasswordStart,
    changePasswordSuccess,
    changePasswordFailed
} = authSlice.actions;

export default authSlice.reducer;