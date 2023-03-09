import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
    name: 'account',
    initialState:{
        accounts: {
            allAccounts: null,
            isFetching: false,
            error: false,
        },
        changeStatusAccount: {
            newStatusAccount: null,
            isFetching: false,
            error: false,
        }
    },
    reducers: {
        getAccountsStart: (state) => {
            state.accounts.isFetching = true;
        },
        getAccountsSuccess: (state, action) => {
            state.accounts.isFetching = false;
            state.accounts.allAccounts = action.payload;
        },
        getAccountsFailed: (state) => {
            state.accounts.isFetching = false;
            state.accounts.error = true;
        },
        changeStatusAccountStart: (state) => {
            // state.changeStatusAccount.isFetching = true;
        },
        changeStatusAccountSuccess: (state, action) => {
            state.changeStatusAccount.isFetching = false;
            state.changeStatusAccount.newStatusAccount = action.payload;
        },
        changeStatusAccountFailed: (state) => {
            state.changeStatusAccount.isFetching = false;
            state.changeStatusAccount.error = true;
        }
    }
})

export const {
    getAccountsStart,
    getAccountsSuccess,
    getAccountsFailed,
    changeStatusAccountStart,
    changeStatusAccountSuccess,
    changeStatusAccountFailed
} = accountSlice.actions;

export default accountSlice.reducer;