import {useNavigate} from 'react-router-dom';
import "./Home_User.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuestions, getUserInfo } from "../../../redux/apiRequest";
import { useEffect } from 'react'
import { questionsAnsweredList, point, time } from '../TakeExam/Take_Exam'
function HomeUser() {
  const userLog = useSelector((state) => state.auth.login?.currentUser);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user.userInfo);
    const questionsList = useSelector((state) => state.questions.questions.allQuestions);
    useEffect(()=>{
        if(userLog){
          if(!questionsList)
          getAllQuestions(userLog?.accessToken, dispatch)
          getUserInfo(userLog?.accessToken, dispatch)
        }
     },[])
    const navigate = useNavigate();
    const handleTakeTest = () => {
        if(!userLog){
           alert('Please login to take test');
           navigate('/login');
        }
        else { 
            navigate('/takeexam');
            questionsAnsweredList = [];
            time = 0;
            point = 0;
      }
    }
  return (
    <section className="user-section">
      <div className="row">
        {
          userLog ? (
        <div className="col" id="column-info-user">
          <h2>Thông tin cá nhân</h2>
          <p>Sinh viên: {user.username}</p>
          <p>Mã số sinh viên: {user.mssv}</p>
          {/* <p>{user.faculty}</p> */}
          <p>Kỳ 20221</p>
        </div>
          ) : (
            <div className="col" id="column-info-user">
            <p>Kỳ 20221</p>
            </div>
          )
        }
        <div className="col" id="column-test">
            <h3>Kiểm tra quy chế kỳ 20221</h3>
            <div className="test-info">
                <p>Thời gian: 60'</p>
                <p>Số lượng câu hỏi: 20</p>
                <p>Số lần làm bài cho phép: Không giới hạn</p>
                <div>
                <button className="btn-takeTest" onClick={handleTakeTest}>Làm bài</button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default HomeUser;
