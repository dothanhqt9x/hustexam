import { createSlice } from "@reduxjs/toolkit";

const documentSlice = createSlice({
    name: 'document',
    initialState:{
        documents: {
            allDocuments: null,
            isFetching: false,
            error: false,
        },
        addDocument: {
            success: false,
            isFetching: false,
            error: false
        },
        editDocument:{
            newDocument: null,
            isFetching: false,
            error: false
        }
    },
    reducers: {
        getDocumentsStart: (state) => {
            state.documents.isFetching = true;
        },
        getDocumentsSuccess: (state, action) => {
            state.documents.isFetching = false;
            state.documents.allDocuments = action.payload;
        },
        getDocumentsFailed: (state) => {
            state.documents.isFetching = false;
            state.documents.error = true;
        },
        addDocumentStart: (state) => {
            state.addDocument.isFetching = true;
        },
        addDocumentSuccess: (state) => {
            state.addDocument.isFetching = false;
            state.addDocument.error = false;
            state.addDocument.success = true;
        },
        addDocumentFailed: (state) => {
            state.addDocument.isFetching = false;
            state.addDocument.success = false;
            state.addDocument.error = true;
        },
        editDocumentStart: (state) => {
            state.editDocument.isFetching = true;
        },
        editDocumentSuccess: (state, action) => {
            state.editDocument.isFetching = false;
            state.editDocument.newDocument = action.payload;
            state.editDocument.error = false;
        },
        editDocumentFailed: (state) => {
            state.editDocument.isFetching = false;
            state.editDocument.error = true;
        },
    }
})

export const {
    getDocumentsStart,
    getDocumentsSuccess,
    getDocumentsFailed,
    addDocumentStart,
    addDocumentSuccess,
    addDocumentFailed,
    editDocumentStart,
    editDocumentSuccess,
    editDocumentFailed,
} = documentSlice.actions;

export default documentSlice.reducer;