import './Forum.css'
const questions = [
    {
        user: 'Chu Huu Phuc',
        content: 'Cử nhân phải học bao nhiêu tín chỉ để ra trường?',
        comments: [
            {
                user: 'Nguyen Van An',
                comment: '135 tín',
                subComments: [
                    {
                        user: 'Chu Huu Phuc',
                        reply: 'Cảm ơn bạn'
                    }
                ],
            },
            {
                user: 'Nguyen Van Binh',
                comment: '140 tín',
                subComments: [
                    {
                        user: 'Nguyen Van An',
                        reply: '135 tín chứ bạn?'
                    }
                ]
            }
        ]
    },
    {
        user: 'Do Van Thanh',
        content: 'Phải đạt tối thiểu bao nhiêu điểm rèn luyện mỗi kì để không bị cảnh cáo?',
        comments: [
            {
                user: 'Le Van An',
                comment: '50 điểm nhá',
                subComments: [
                    {
                        user: 'Do Van Thanh',
                        reply: 'Cam on ban'
                    }
                ]
            },
            {
                user: 'Le Van Binh',
                comment: 'Trên 50 điểm là được bạn ơi',
                subComments: [
                    {
                        user: 'Do Van Thanh',
                        reply: 'Cam on ban'
                    },
                    {
                        user: 'Do Van Thanh',
                        reply: 'Cam on ban'
                    }
                ]
            },
            {
                user: 'Tran Van Cong',
                comment: '50',
                subComments: [
                    {
                        user: 'Do Van Thanh',
                        reply: 'Cam on ban'
                    }
                ]
            },
        ]
    }
]
function Forum(){
    return(
        <div className='qAnda'>
            <div className='search-box'>
                <input type="text" placeholder='Nhập để tìm kiếm'/>
                <button className='btn-search'>Tìm kiếm</button>
                <button className='btn-add'>Tạo câu hỏi</button>
            </div>
            <div className='questions-box'>
            {
            questions.map((question, index) => {
                return(
                    <div key={index} className = 'question'>
                        <div className='question-content'>
                            <h3 className='id-his'>{question.user}</h3>
                            <p>Câu hỏi: <h4>{question.content}</h4></p>
                        </div>
                        <i className='num-of-comments'>{question.comments.length} câu trả lời</i>
                        <ul className='list-comment'>
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
                                        {/* <div className='rep-cmt'>
                                            <input type="text" placeholder='Trả lời'/>
                                            <a href="#!">Gửi</a>
                                        </div> */}
                                    </div>
                                    )
                                })}
                        </ul>
                        <div className='rep-question'>
                            <input type="text" placeholder='Trả lời' />
                            <a href="#!">Gửi</a>
                        </div>
                    </div>
                )
            })
        }
            </div>
        </div>
    )
}

export default Forum