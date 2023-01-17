import { useEffect, useState } from 'react'
import './Forum.css'
import { getAllPosts } from '../../../redux/apiRequest'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment } from 'react';
import { postQuestion } from '../../../redux/apiRequest';
import { addComment } from '../../../redux/apiRequest';

function Forum(){
    const dispatch = useDispatch();
    useEffect(() => {
        getAllPosts(dispatch);
    },[])
    const listPosts = useSelector(state => state.post.posts.allPosts);
    const user = useSelector(state => state.auth.login.currentUser);

    const [show, setShow] = useState(false);
    const [post, setPost] = useState('');
    const [comment, setComment] = useState('');
    const [postId, setPostId] = useState();
    const newPost = {
        content: post
    }
    const handlePost = () => {
        postQuestion(user.accessToken, newPost, dispatch);
    }
    const newComment = {
        post_id: postId,
        content: comment
    }
    const handleAddComment = () => {
        addComment(newComment, dispatch);
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
                        {/* <ul className='list-comment'>
                            {question.comments.map((comment, index) => {
                                return(
                                    <div>
                                        <dl className='comment-his' key={index}>
                                            <div className='comment'>
                                                <h5>{comment.user}</h5>
                                                <p>{comment.comment}</p>
                                            </div>
                                            <a href="#!" className='num-of-comments'>Trả lời</a>
                                            <div className='sub-cmts'>
                                            {comment.subComments?.map((subcmt, index) => {
                                                return(
                                                <dt key={index}>
                                                    <div className='sub-cmt'>
                                                        <h5>{subcmt.user}</h5>
                                                        <p>{subcmt.reply}</p> 
                                                    </div>
                                                </dt>
                                                )
                                            })
                                            }
                                            </div>
                                        </dl>
                                    </div>
                                    )
                                })}
                        </ul> */}
                        <div className='rep-question'>
                            <input type="text" placeholder='Trả lời' onChange={e => {
                                setComment(e.target.value);
                                setPostId(index + 1);
                            }}/>
                            <a href="#!" onClick={handleAddComment}>Gửi</a>
                        </div>
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