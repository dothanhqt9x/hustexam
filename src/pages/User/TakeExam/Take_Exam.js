import "./Take_Exam.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import { useState, useEffect, memo, useRef } from 'react'
import Result from "../Result/Result";
import { getAllQuestions } from "../../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { submit } from "../../../redux/apiRequest";


// const user = {
//   name: "Chu Hữu Phúc",
//   user_id: 20205217,
//   faculty: "Trường Công nghệ thông tin và Truyền thông",
//   semester: "20221",
// };
// const questions = [
//     { 
//         questionID: 1,
//         title: 'Để hình thành kỷ luật học tập, sinh viên cần làm gì?',
//         answerA: 'Rèn luyện tính tự giác khi học',
//         answerB: 'Tuân thủ triệt để kế hoạch học tập đã đề ra',
//         answerC: 'Tự rèn luyện bản thân theo kế hoạch học tập',
//         answerD: 'Hình thành thói quen học tập hàng ngày, ghi chép bài, nghe giảng đầy đủ',
//         answerCorrect: 'B',
//         point: 1
//     },
//     {   
//         questionID: 2,
//         title: 'Trường Đại học Bách khoa Hà Nội được phong danh hiệu Anh Hùng Lao động thời kỳ đổi mới năm nào?',
//         answerA: '2000',
//         answerB: '2005',
//         answerC: '2010',
//         answerD: '2015',
//         answerCorrect: 'A',
//         point: 1
//     },
//     {   
//         questionID: 3,
//         title: 'Trong trường hợp nào sau đây thì shipper được vào trong trường?',
//         answerA: 'Shipper giao đồ ăn thì được vào trong trường',
//         answerB: 'Shipper giao hàng hóa thì được vào trong trường',
//         answerC: 'Shipper giao đồ ăn hay hàng hóa đều được vào trong trường',
//         answerD: 'Shipper giao đồ ăn hay hàng hóa đều không được vào trong trường',
//         answerCorrect: 'D',
//         point: 1
//     },
//     {   
//         questionID: 4,
//         title: 'Sinh viên cần lưu ý những quy định nào sau đây?',
//         answerA: 'Sinh viên đến trường phải mang theo thẻ sinh viên, trang phục gọn gàng phù hợp với văn hóa Việt Nam và sự nghiêm túc của trường đại học.',
//         answerB: 'Không được tự ý mang tài sản của trường ra ngoài khuôn viên trường',
//         answerC: 'Sau 18h00 hàng ngày, không được tự ý tụ tập ở các khu vực công cộng thuộc khuôn viên của trường. Mọi hoạt động văn hóa, văn nghệ, thể dục thể thao tổ chức trong trường phải được sự đồng ý cho phép bằng văn bản của Nhà trường.',
//         answerD: 'Không tự ý tổ chức các hoạt động quảng cáo, dịch vụ hoặc tổ chức đánh bạc trong khuôn viên trường dưới mọi hình thức.',
//         answerCorrect: 'D',
//         point: 1
//     },
//     {   
//         questionID: 5,
//         title: ' Trường Đại học Bách khoa Hà Nội được thành lập năm nào?',
//         answerA: 'Năm 1955',
//         answerB: 'Năm 1956',
//         answerC: 'Năm 1957',
//         answerD: 'Năm 1958',
//         answerCorrect: 'B',
//         point: 1
//     },
//     {   
//         questionID: 6,
//         title: ' Chương trình "Cốc trà đá vì cộng đồng" nếu được tổ chức sẽ diễn ra vào ngày nào trong tuần? ',
//         answerA: 'Thứ Sáu',
//         answerB: 'Thứ Ba',
//         answerC: 'Thứ Năm',
//         answerD: 'Thứ Bảy',
//         answerCorrect: 'C',
//         point: 1
//     },
//     {   
//         questionID: 7,
//         title: 'Để đạt được Danh hiệu Sinh viên 5 tốt, bạn cần đáp ứng đủ những tiêu chí nào sau đây?',
//         answerA: 'Đạo đức tốt, Học tập tốt, Tình nguyện tốt, Sức khoẻ tốt, Hội nhập tốt',
//         answerB: 'Đạo đức tốt, Rèn luyện tốt, Tình nguyện tốt, Thể lực tốt, Kĩ năng tốt',
//         answerC: 'Đạo đức tốt, Học tập tốt, Tình nguyện tốt, Thể lực tốt, Hội nhập tốt',
//         answerD: 'Đạo đức tốt, Học tập tốt, Lao động tốt, Thể lực tốt, Hội nhập tốt',
//         answerCorrect: 'C',
//         point: 1
//     },
//     {   
//         questionID: 8,
//         title: 'Hiện tại Đại học Bách khoa Hà Nội có bao nhiêu Trường, Viện đào tạo chuyên ngành?',
//         answerA: '3 Trường và 11 Viện',
//         answerB: '2 Trường và 10 Viện',
//         answerC: '3 Trường và 10 Viện',
//         answerD: '3 Trường và 12 Viện',
//         answerCorrect: 'A',
//         point: 1
//     },
//     {   
//         questionID: 9,
//         title: 'Địa chỉ email của Đoàn Thanh niên trường Đại học Bách khoa Hà Nội?',
//         answerA: 'dtndhbkhn@hust.edu.vn',
//         answerB: 'doanthanhnien@hust.edu.vn',
//         answerC: 'dtn@hust.edu.vn',
//         answerD: 'dtndhbk@hust.edu.vn',
//         answerCorrect: 'C',
//         point: 1
//     },
//     {   
//         questionID: 10,
//         title: 'Địa chỉ fanpage của trường Đại học Bách khoa Hà Nội là?',
//         answerA: 'https://www.facebook.com/dhbk/',
//         answerB: 'https://www.facebook.com/dhbkhanoi',
//         answerC: 'https://www.facebook.com/ctsv.hust.edu.vn/',
//         answerD: 'https://www.facebook.com/hoisinhvienbkhn',
//         answerCorrect: 'B',
//         point: 1
//     },
//     ]
var currentIndex = 0;
var point = 0;
var time;
var questionsList;
var questionsAnsweredList = [];
var chosen = [];
var answersList = [];
function TakeExam(){
    var questionAnswered = {
        questions: {},
        answersChoose: [],
        flag: 0
    }
    const [countdown, setCountdown] = useState(3600);
    const [selected, setSelected] = useState();
    const handleSubmit = () => {
        if(currentIndex === questionsList.length - 1){
            questionAnswered.questions = question;
            if(question.key.length === 1){
            questionAnswered.answersChoose.push(selected);
        }
        else {
            questionAnswered.answersChoose = chosen;
            questionAnswered.answersChoose.sort(function(a, b){return a - b});
            chosen = []
        }
        console.log(questionAnswered);
        questionsAnsweredList.push(questionAnswered);
        }
        for(let i = 0; i < 20; i++){
            if(questionsList[i].key.join() === questionsAnsweredList[i]?.answersChoose.join()){ 
                point++;
                questionsAnsweredList[i].flag = 1;
            }
        }
        for(let i = 0; i < 20; i++){
            let answer = {
                questionNumber: null,
                chooses: [],
                flag: 0
            };
            answer.questionNumber = i + 1;
            answer.chooses = questionsAnsweredList[i].answersChoose;
            answer.flag = questionsAnsweredList[i].flag;
            answersList.push(answer);
        }
        time = 3600 - countdown;
        currentIndex = 0;
        alert(`Your point: ${point} `);
        submit(answersList, dispatch, navigate);
    }
    const user = useSelector((state) => state.auth.login?.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!user){
            navigate('/login');
        }
        else{
            getAllQuestions(user?.accessToken, dispatch)
        }
     },[])
    questionsList = useSelector((state) => state.questions.questions.allQuestions);
    const ansChar = ['A','B','C','D','E','F'];
    const [question, setQuestion] = useState(questionsList[currentIndex]);
    const [checkedState, setCheckedState] = useState(new Array(question.answer.length).fill(false))
    useEffect(() => {
        setInterval(() =>{
            setCountdown(prevState => prevState > 0 ? (prevState - 1) : handleSubmit())
        }, 1000)                
    }, [])
    const handleCheckbox = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
    );
      setCheckedState(updatedCheckedState);

      chosen = updatedCheckedState.reduce((choose, currentState, index) => {
         if(currentState) choose.push(index + 1);
         return choose;
      }, [])
    }
    function renderNextQuestion() {
        questionAnswered.questions = question;
        if(question.key.length === 1){
            questionAnswered.answersChoose.push(selected);
        }
        else {
            questionAnswered.answersChoose = chosen;
            questionAnswered.answersChoose.sort(function(a, b){return a - b});
            chosen = []
        }
        console.log(questionAnswered);
        questionsAnsweredList.push(questionAnswered);
        if (currentIndex === questionsList.length - 1) {
            return;
        }
        else
            currentIndex++;
        setQuestion(questionsList[currentIndex]);
    }
    return(
        <div>
        <div className="head">
            <h3>Kiểm tra quy chế kì 20221</h3>
            <p className="percent">{Math.floor(currentIndex / questionsList.length * 100)} %</p>
            <input id="progress" className="progress" value={currentIndex / questionsList.length * 100} type="range" step="1" min="0" max="100" onChange={setSelected}></input>
            <div className="time">
                <FaClock style={{color: '#002ead', fontSize: '130%'}}/>
                <p>Time left: {("0"+Math.floor(countdown / 60)).slice(-2)}:{("0"+ (countdown - 60 * Math.floor(countdown / 60))).slice(-2)} s</p>
            </div>
        </div>
        <div className="question-list">
            <div className="question" id="question">
            <h2>Question {currentIndex + 1}</h2>
            <h3 className="title">{question.question}</h3>
                <div className="list">
                <dl>
                    {question.answer.map((answer, index) => {
                    return(
                     (question.key.length === 1) ? (
                    <dt key={index}>
                        <input type='radio'
                            className="answer"
                            checked = {selected === index + 1} 
                            onChange={() => {setSelected(index + 1)}}/>
                        <label
                        htmlFor={index}>{ansChar[index]}. {answer}</label>
                    </dt>
                     ) : (
                        <dt key={index}>
                        <input type='checkbox'
                            className="answer"
                            id={`custom-checkbox-${index}`}
                            name={index}
                            value={index}
                            checked={checkedState[index]}
                            onChange={() => {handleCheckbox(index)}}/>
                        <label
                        htmlFor={index}>{ansChar[index]}. {answer}</label>
                    </dt>
                     )
                    )
                     }
                    )}
                </dl>
                </div>
            </div>
        </div>
            <div className="button">        
            <button id="next" onClick={renderNextQuestion}>Next<FaArrowCircleRight style={{marginLeft: '20px',position: 'relative',top: '2px'}}/></button>
            <button id="finish" onClick={handleSubmit} disabled = {(currentIndex !== questionsList.length - 1) ? 'true' : ''}>Submit</button>
            </div>  
    </div>
    )
}
export default memo(TakeExam);

export {point, time, questionsAnsweredList};
