import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState:{
        dashboard: {
            quantityOfScore: null,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        getDashboardStart: (state) => {
            state.dashboard.isFetching = true;
        },
        getDashboardSuccess: (state, action) => {
            state.dashboard.isFetching = false;
            state.dashboard.quantityOfScore = action.payload;
        },
        getDashboardFailed: (state) => {
            state.dashboard.isFetching = false;
            state.dashboard.error = true;
        }
    }
})

export const {
    getDashboardStart,
    getDashboardSuccess,
    getDashboardFailed
} = dashboardSlice.actions;

export default dashboardSlice.reducer;