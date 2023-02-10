import { createSlice } from "@reduxjs/toolkit";

const schoolSlice = createSlice({
    name: 'school',
    initialState:{
        schools: {
            allSchools: null,
            isFetching: false,
            error: false,
        },
        addSchool: {
            success: false,
            isFetching: false,
            error: false
        },
        changeSchoolName:{
            newName: null,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        getSchoolsStart: (state) => {
            state.schools.isFetching = true;
        },
        getSchoolsSuccess: (state, action) => {
            state.schools.isFetching = false;
            state.schools.allSchools = action.payload;
        },
        getSchoolsFailed: (state) => {
            state.schools.isFetching = false;
            state.schools.error = true;
        },
        addSchoolStart: (state) => {
            state.addSchool.isFetching = true;
        },
        addSchoolSuccess: (state, action) => {
            state.addSchool.isFetching = false;
            state.addSchool.error = false;
            state.addSchool.success = true;
        },
        addSchoolFailed: (state) => {
            state.addSchool.isFetching = false;
            state.addSchool.success = false;
            state.addSchool.error = true;
        },
        changeSchoolNameStart: (state) => {
            state.changeSchoolName.isFetching = true;
        },
        changeSchoolNameSuccess: (state, action) => {
            state.changeSchoolName.isFetching = false;
            state.changeSchoolName.newName = action.payload;
            state.changeSchoolName.error = false;
        },
        changeSchoolNameFailed: (state) => {
            state.changeSchoolName.isFetching = false;
            state.changeSchoolName.error = true;
        },
    }
})

export const {
    getSchoolsStart,
    getSchoolsSuccess,
    getSchoolsFailed,
    addSchoolStart,
    addSchoolSuccess,
    addSchoolFailed,
    changeSchoolNameStart,
    changeSchoolNameSuccess,
    changeSchoolNameFailed,
} = schoolSlice.actions;

export default schoolSlice.reducer;