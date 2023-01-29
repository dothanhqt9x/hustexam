import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addComment } from '../../../redux/apiRequest';
import './PostDetail.css'

export default function PostDetail(){
    const post = useSelector(state => state.post.postDetail.postInfo);
    const [comment, setComment] = useState('');
    const [postId, setPostId] = useState();
    const [answer, setAnswer] = useState(false);
    const [reply, setReply] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newComment = {
        post_id: postId,
        content: comment
    }
    const handleAddComment = () => {
        addComment(newComment, dispatch);
    }
    return (
        post ? (
            <div>
                        <div className='question-content-detail'>
                            <span>
                                <h3 className='id-his'>{post.email}</h3>
                                <i className='time-post'>đã đăng vào {post.time}</i>
                            </span>
                            <p>Câu hỏi: <h4>{post.content}</h4></p>
                            <a href="#!" className='reply-post' onClick={() => setAnswer(!answer)}>Trả lời</a>
                        </div>
                        <ul className='list-comment'>
                            {post.comment?.map((comment, index) => {
                                return(
                                    <div>
                                        <dl className='comment-his' key={index}>
                                            <div className='comment'>
                                                <span>
                                                    <h5>{comment.email}</h5>
                                                    <i className='time-comment'>đã trả lời vào {comment.time}</i>
                                                </span>
                                                <p>{comment.content}</p>
                                            </div>
                                            <a href="#!" className='reply-comment' onClick={() => setReply(!reply)}>Phản hồi</a>
                                            <div className='sub-cmts'>
                                            {comment.sub_comment?.map((subcmt, index) => {
                                                return(
                                                <dt key={index}>
                                                    <div className='sub-cmt'>
                                                        <span>
                                                            <h5>{subcmt.email}</h5>
                                                            <i className='time-subcmt'>đã phản hồi vào {subcmt.time}</i>
                                                        </span>
                                                        <p>{subcmt.content}</p> 
                                                    </div>
                                                </dt>
                                                )
                                            })
                                            }
                                            </div>
                                            { reply ? (
                                                <div className='rep-question'>
                                                    <input type="text" placeholder='Trả lời' onChange={e => {
                                                        setComment(e.target.value);
                                                        setPostId(post.post_id);
                                                    }}/>
                                                    <a href="#!" onClick={handleAddComment}>Gửi</a>
                                                </div>
                        ) : Fragment
                        }
                                        </dl>
                                    </div>
                                    )
                                })}
                        </ul>
                        { answer ? (
                        <div className='rep-question'>
                            <input type="text" placeholder='Trả lời' onChange={e => {
                                setComment(e.target.value);
                                setPostId(post.post_id);
                            }}/>
                            <a href="#!" onClick={handleAddComment}>Gửi</a>
                        </div>
                        ) : Fragment
                        }
        </div>
        ) : (Fragment)
    )
}