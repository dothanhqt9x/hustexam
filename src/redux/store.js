import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import authReducers from './authSlice'
import questionReducers from './questionSlice';
import userReducers from './userSlice';
import submitReducers from './submit';
import historyReducers from './history';
import timesReducers from './timesSlice';
import postReducers from './postSlice';
import commentReducers from './commentSlice';
import schoolReducers from './schoolSlice';
import documentReducers from './documentSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    auth: authReducers,
    questions: questionReducers,
    user: userReducers,
    submit: submitReducers,
    history: historyReducers,
    times: timesReducers,
    post: postReducers,
    comment: commentReducers,
    school: schoolReducers,
    document: documentReducers
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

export let persistor = persistStore(store)


// import {configureStore} from '@reduxjs/toolkit';
// import authReducers from './authSlice'
// import questionReducers from './questionSlice';
// import userReducers from './userSlice';
// import submitReducers from './submit';
// import historyReducers from './history';
// import timesReducers from './timesSlice';
// import postReducers from './postSlice';
// import commentReducers from './commentSlice';
// export const store = configureStore({
//     reducer:{
//         auth: authReducers,
//         questions: questionReducers,
//         user: userReducers,
//         submit: submitReducers,
//         history: historyReducers,
//         times: timesReducers,
//         post: postReducers,
//         comment: commentReducers,
//     }
// })
