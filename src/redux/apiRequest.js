import axios from 'axios';
import { loginStart, loginFailed, loginSuccess, registerStart, registerFailed, registerSuccess, 
    changePasswordStart, changePasswordSuccess, changePasswordFailed } from './authSlice';
import { getQuestionsFailed, getQuestionsStart, getQuestionsSuccess } from './questionSlice';
import { changeUserInfoFailed, changeUserInfoStart, changeUserInfoSuccess, getUserInfoFailed, getUserInfoStart, getUserInfoSuccess } from './userSlice';
import { submitStart, submitSuccess, submitFailed } from './submit';
import { getHistoryStart, getHistorySuccess, getHistoryFailed } from './history';
import { getTimesStart, getTimesSuccess, getTimesFailed } from './timesSlice';
export const loginUser = async(user, dispatch,navigate) => {
    dispatch(loginStart())
    try {
        const res = await axios.post('/login',user);
        dispatch(loginSuccess(res.data));
        navigate('/')
    }
    catch (err) {
        dispatch(loginFailed());
        alert('Email or password is incorrect');
    }
}

export const registerUser = async(user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        await axios.post('/register',user);
        dispatch(registerSuccess());
        navigate('/login');
    }
    catch(err){
        dispatch(registerFailed());
        alert('Error: ' + err.message);
    }
}

export const changePasswordUser = async(password, dispatch, navigate) => {
    dispatch(changePasswordStart());
    try{
        const res = await axios.post('/change/password',password,{
            headers: { ContentType: 'application/json'}
        })
        dispatch(changePasswordSuccess(res.data));
        alert('Mật khẩu của bạn đã thay đổi thành công!')
        navigate('/')
    }catch(err){
        dispatch(changePasswordFailed());
        alert('Error: Mật khẩu của bạn chưa được thay đổi!');
    }
}

export const changeUserInfo = async(accessToken, newInfo, dispatch, navigate) => {
    dispatch(changeUserInfoStart());
    try{
        const res = await axios.post('/user/edit',newInfo,{
            headers: { ContentType: 'application/json'},
            token: `Bearer ${accessToken}`
        })
        dispatch(changeUserInfoSuccess(res.data));
        alert('Thông tin của bạn đã được thay đổi thành công!')
        navigate('/')
    }catch(err){
        dispatch(changeUserInfoFailed());
        alert('Error: Thông tin của bạn chưa được thay đổi');
    }
}

export const getHistory = async (dispatch, navigate) => {
    dispatch(getHistoryStart());
    try {
        const res = await axios.get('get_history_list');
        dispatch(getHistorySuccess(res.data));
        navigate('/historylist');
    }catch(err){
        dispatch(getHistoryFailed());
    }
}

export const getHistoryDetail = async (id, dispatch, navigate) => {
    dispatch(getTimesStart());
    try {
        const res = await axios.get(`get_history_details?id=${id}`);
        dispatch(getTimesSuccess(res.data));
        navigate('/historydetail');
    }catch(err){
        dispatch(getTimesFailed());
        alert('Error: ' + err.message);
    }
}

export const getUserInfo = async (accessToken, dispatch) => {
    dispatch(getUserInfoStart());
    try {
        const res = await axios.get('/user/detail',{
            headers: {token: `Bearer ${accessToken}`},
        })
        dispatch(getUserInfoSuccess(res.data));
    }catch(err){
        dispatch(getUserInfoFailed());
    }
}

export const submit = async(answers, dispatch, navigate) => {
    dispatch(submitStart());
    try{
        const res = await axios.post('question/submit',answers,{
            headers: { ContentType: 'application/json'}
        })
        dispatch(submitSuccess(res.data));
        navigate('/result')
    }catch(err){
        dispatch(submitFailed());
    }
}

export const getAllQuestions = async (accessToken, dispatch) => {
    dispatch(getQuestionsStart());
    try {
        const res = await axios.get('/question/all',{
            headers: { ContentType: 'application/json'},
            token: `Bearer ${accessToken}`
        })
        dispatch(getQuestionsSuccess(res.data));
    }catch(err){
        dispatch(getQuestionsFailed());
    }
}



