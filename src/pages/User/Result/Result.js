import './Result.css';
import {point} from '../TakeExam/Take_Exam'
import {time} from '../TakeExam/CountdownTimer'
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from '../../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';

function Result(){
      const user = useSelector(state => state.user.user.userInfo);
      const list = useSelector(state => state.history.history.list);
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const handleSeeResult = () => {
          getHistory(dispatch, navigate);
      }
    return(
        <div className="row-result">
        <div className="col" id='column-info-user'>
          <h2>User information</h2>
          <p>Sinh viên: {user?.username}</p>
          <p>Mã số sinh viên: {user?.mssv}</p>
          <p>{user?.school}</p>
          <p>Kỳ 20221</p>
        </div>

        <div className="col" id='column-result'>
            <h3>Chúc mừng bạn đã hoàn thành bài thi!</h3>
            <div className="result">
                <p>Thời gian làm bài: {Math.floor(time / 60)}:{time - 60 * Math.floor(time / 60)} s</p>
                <p>Tổng số câu trả lời đúng: {point}/20</p>
                <p>Điểm: {point / 20 * 10}</p>
            </div>
                <button className="btn-retakeTest" onClick={handleSeeResult}>Xem lịch sử làm bài</button>
                {/* <a href="/" style={{marginLeft: '290px'}}>Xem lịch sử làm bài</a> */}
        </div>
      </div>
    )
}
export default Result;