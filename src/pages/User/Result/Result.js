import './Result.css';
import {Routes, Route, Link} from 'react-router-dom';
import TakeExam from '../TakeExam/Take_Exam';
import HistoryDetail from '../history_detail/HistoryDetail';
import {point, time} from '../TakeExam/Take_Exam'
import { useSelector } from 'react-redux';
function Result(){
      const user = useSelector(state => state.user.user.userInfo);
    return(
        <div className="row-result">
        <div className="col" id='column-info-user'>
          <h2>User information</h2>
          <p>Sinh viên: {user?.username}</p>
          <p>Mã số sinh viên: {user?.mssv}</p>
        </div>

        <div className="col" id='column-result'>
            <h3>Chúc mừng bạn đã hoàn thành bài thi!</h3>
            <div className="result">
                <p>Thời gian làm bài: {Math.floor(time / 60)}:{time - 60 * Math.floor(time / 60)} s</p>
                <p>Tổng số câu trả lời đúng: {point}/20</p>
                <p>Điểm: {point}</p>
            </div>
            <div>
                <Link to='/historydetail'><button className="btn-retakeTest">Xem chi tiết kết quả</button></Link>
                 <Routes>
                    <Route path="/historydetail/*" element={<HistoryDetail/>} />
                </Routes> 
                </div>
        </div>
      </div>
    )
}
export default Result;