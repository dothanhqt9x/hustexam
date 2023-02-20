import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState:{
        dashboard: {
            quantityOfScore: null,
            isFetching: false,
            error: false
        },
        statistic:{
            list: null,
            isFetching: false,
            error: false
        }
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
        },
        getStatisticStart: (state) => {
            state.statistic.isFetching = true;
        },
        getStatisticSuccess: (state, action) => {
            state.statistic.isFetching = false;
            state.statistic.list = action.payload;
        },
        getStatisticFailed: (state) => {
            state.statistic.isFetching = false;
            state.statistic.error = true;
        }
    }
})

export const {
    getDashboardStart,
    getDashboardSuccess,
    getDashboardFailed,
    getStatisticStart, 
    getStatisticSuccess,
    getStatisticFailed, 
} = dashboardSlice.actions;

export default dashboardSlice.reducer;