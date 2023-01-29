import axios from 'axios';
import { loginStart, loginFailed, loginSuccess, registerStart, registerFailed, registerSuccess, 
    changePasswordStart, changePasswordSuccess, changePasswordFailed } from './authSlice';
import { getQuestionsFailed, getQuestionsStart, getQuestionsSuccess, addQuestionStart, addQuestionSuccess, addQuestionFailed } from './questionSlice';
import { changeUserInfoFailed, changeUserInfoStart, changeUserInfoSuccess, getUserInfoFailed, getUserInfoStart, getUserInfoSuccess } from './userSlice';
import { submitStart, submitSuccess, submitFailed } from './submit';
import { getHistoryStart, getHistorySuccess, getHistoryFailed } from './history';
import { getTimesStart, getTimesSuccess, getTimesFailed } from './timesSlice';
import { getPostsStart, getPostsSuccess, getPostsFailed, addPostStart, addPostSuccess, addPostFailed, getPostDetailStart, getPostDetailSuccess, getPostDetailFailed} from './postSlice';
import { addCommentStart, addCommentSuccess, addCommentFailed, replyCommentStart, replyCommentSuccess, replyCommentFailed } from './commentSlice';

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

export const addQuestion = async(formData, dispatch) => {
    dispatch(addQuestionStart());
    try{
        const res = await axios.post('/question/create',formData,{
            headers: { ContentType: 'multipart/form-data' },
        })
        dispatch(addQuestionSuccess(res.data));
        alert('Thêm câu hỏi thành công!')
    }catch(err){
        dispatch(addQuestionFailed());
        alert('Error: Câu hỏi chưa được thêm ' + err.message);
    }
}

export const getAllPosts = async (page, dispatch) => {
    dispatch(getPostsStart());
    try {
        const res = await axios.get(`/getAllPost/${page}/10`,{
            headers: { ContentType: 'application/json'},
        })
        dispatch(getPostsSuccess(res.data));
    }catch(err){
        dispatch(getPostsFailed());
    }
}

export const getPostDetail = async (id, dispatch, navigate) => {
    dispatch(getPostDetailStart());
    try {
        const res = await axios.get(`/getPostDetail/${id}`)
        dispatch(getPostDetailSuccess(res.data));
        navigate('/postdetail')
    }catch(err){
        dispatch(getPostDetailFailed());
    }
}

export const addComment = async(newComment, dispatch) => {
    dispatch(addCommentStart());
    try{
        const res = await axios.post('/addComment',newComment,{
            headers: { ContentType: 'application/json' },
        })
        dispatch(addCommentSuccess(res.data));
        alert('Thêm comment thành công!')
    }catch(err){
        dispatch(addCommentFailed());
        alert('Error: Comment chưa được thêm ' + err.message);
    }
}

export const replyComment = async(subComment, dispatch) => {
    dispatch(replyCommentStart());
    try{
        const res = await axios.post('/addSubComment',subComment,{
            headers: { ContentType: 'application/json' },
        })
        dispatch(replyCommentSuccess(res.data));
        alert('Thêm phản hồi thành công!')
    }catch(err){
        dispatch(replyCommentFailed());
        alert('Error: Comment chưa được thêm ' + err.message);
    }
}

export const postQuestion = async(accessToken, newQuestion, dispatch) => {
    dispatch(addPostStart());
    try{
        const res = await axios.post('/create/post',newQuestion,{
            headers: { ContentType: 'application/json'},
            token: `Bearer ${accessToken}`
        })
        dispatch(addPostSuccess(res.data));
        alert('Câu hỏi của bạn đã được thêm thành công!')
    }catch(err){
        dispatch(addPostFailed());
        alert('Error: Câu hỏi của bạn chưa được thêm');
    }
}


