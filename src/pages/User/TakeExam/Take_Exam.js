import "./Take_Exam.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import { useState, useEffect, memo} from 'react'
import { getAllQuestions } from "../../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { submit } from "../../../redux/apiRequest";


var currentIndex = 0;
var point = 0;
var time = 0;
var questionsList;
var questionsAnsweredList = [];
var chosen = [];
var answersList = [];
function TakeExam(){
    var questionAnswered = {
        questionNumber: 0,
        questions: {},
        answersChoose: [],
        flag: 0
    }
    const [countdown, setCountdown] = useState(3600);
    const [selected, setSelected] = useState();
    const ansChar = ['A','B','C','D','E','F'];
    questionsList = useSelector((state) => state.questions.questions.allQuestions);
    const [question, setQuestion] = useState(questionsList[currentIndex]);
    const [checkedState, setCheckedState] = useState(new Array(question.answer.length).fill(false))
    const user = useSelector((state) => state.auth.login?.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        if(!user){
            navigate('/login');
        }
        else{
            getAllQuestions(user?.accessToken, dispatch, navigate)
        }
        questionsAnsweredList = [];
        point = 0;
        time = 0;
        answersList = [];
     },[])

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
        questionAnswered.questionNumber = question.questionNumber;
        questionsAnsweredList.push(questionAnswered);
        if (currentIndex === questionsList.length - 1) {
            return;
        }
        else
            currentIndex++;
        setQuestion(questionsList[currentIndex]);
        setCheckedState(new Array(question.answer.length).fill(false))
        setSelected();
    }

    function renderPrevQuestion() {
        questionAnswered.questions = question;
        if(question.key.length === 1){
            questionAnswered.answersChoose.push(selected);
        }
        else {
            questionAnswered.answersChoose = chosen;
            questionAnswered.answersChoose.sort(function(a, b){return a - b});
            chosen = []
        }
        questionAnswered.questionNumber = question.questionNumber;
        questionsAnsweredList.push(questionAnswered);
        if (currentIndex === 0) {
            return;
        }
        else
            currentIndex--;
        setQuestion(questionsList[currentIndex]);
        setCheckedState(new Array(question.answer.length).fill(false))
        setSelected();
    }

    const handleSubmit = () => {
        if(currentIndex === questionsList.length - 1){
            questionAnswered.questions = question;
            questionAnswered.questionNumber = question.questionNumber;
            if(question.key.length === 1){
            questionAnswered.answersChoose.push(selected);
        }
        else {
            questionAnswered.answersChoose = chosen;
            questionAnswered.answersChoose.sort(function(a, b){return a - b});
            chosen = []
        }
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
            answer.questionNumber = questionsAnsweredList[i].questionNumber;
            answer.chooses = questionsAnsweredList[i].answersChoose;
            answer.flag = questionsAnsweredList[i].flag;
            answersList.push(answer);
        }
        time = 3600 - countdown;
        currentIndex = 0;
        console.log(answersList);
        submit(answersList, dispatch, navigate);
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
            <button id="next" onClick={renderPrevQuestion}>Prev<FaArrowCircleLeft style={{marginLeft: '20px',position: 'relative',top: '2px'}}/></button>
            <button id="next" onClick={renderNextQuestion}>Next<FaArrowCircleRight style={{marginLeft: '20px',position: 'relative',top: '2px'}}/></button>
            <button id="finish" onClick={handleSubmit} disabled = {(currentIndex !== questionsList.length - 1) ? 'true' : ''}>Submit</button>
            </div>  
    </div>
    )
}
export default memo(TakeExam);

export {point, time, questionsAnsweredList};       