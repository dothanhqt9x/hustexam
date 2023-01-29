import { useEffect, useState } from 'react'
import './Forum.css'
import { getAllPosts } from '../../../redux/apiRequest'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment } from 'react';
import { postQuestion, getPostDetail } from '../../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';

function Forum(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    useEffect(() => {
        getAllPosts(page, dispatch);
    },[])
    const listPosts = useSelector(state => state.post.posts.allPosts);
    const user = useSelector(state => state.auth.login.currentUser);

    const [show, setShow] = useState(false);
    const [post, setPost] = useState('');
    const newPost = {
        content: post
    }
    const handlePost = () => {
        postQuestion(user.accessToken, newPost, dispatch);
    }
    return(
        <div className='qAnda'>
            <div className='search-box'>
                <input type="text" placeholder='Nhập để tìm kiếm'/>
                <button className='btn-search'>Tìm kiếm</button>
                <button className='btn-add' onClick={() => setShow(!show)}>Tạo câu hỏi</button>
                {
                    show ? (
                        <div>
                            <label htmlFor="new-q">Câu hỏi</label>
                            <input type="text" name='new-q' id='new-q' onChange={(e) => setPost(e.target.value)}/>
                            <button onClick={handlePost}>Gửi</button>
                        </div>
                    ) : (Fragment)
                }
            </div>
            <div className='questions-box'>
            { 
                listPosts ? (
            listPosts.map((question, index) => {
                return(
                    <div key={index} className = 'question'>
                        <div className='question-content'>
                            <h3 className='id-his'>{question.userId}</h3>
                            <p>Câu hỏi: <h4>{question.content}</h4></p>
                        </div>
                        <i className='num-of-comments'>{question.time}</i>
                        <a href="#!" className='see-detail' onClick={() => {
                            getPostDetail(index + 1, dispatch, navigate);
                        }}>Xem chi tiết</a>
                    </div>
                )
            })
                ) : (Fragment)
        }
            </div>
        </div>
    )
}

export default Forum