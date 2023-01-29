/* eslint-disable jsx-a11y/anchor-is-valid */
// import './vendors/grid.css'
// import './index.css'
import './Home_Admin.css'
import {FaPlus} from 'react-icons/fa'
import {FaEye} from 'react-icons/fa'
import {ImBin} from 'react-icons/im'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllQuestions } from '../../../redux/apiRequest';
import { Fragment } from 'react';
import { addQuestion } from '../../../redux/apiRequest';

const time = 60;
function QuestionItem(question){
            const ansChar = ['A','B','C','D','E','F'];
            return(
                <div className = 'question-ha'>
                          <div className="body">
                              <h3 className="id">Câu {question.index}</h3>
                              <p className="title">{question.question}</p>
                              <div className='question-details'>
                                <ol className='list-answers'>
                                {question.answers?.map((answer, index) => {
                                        return(
                                        <li className='answer-his' key={index}>{answer}</li>
                                        )
                                    })}
                                </ol>
                                <p>Câu trả lời đúng: {ansChar[question.correctAnswers[0] - 1]} {ansChar[question.correctAnswers[1] - 1]}</p>
                              </div>
                          </div>
                          {/* <FaEye style={{color: '#24367e', marginRight: '10px'}}/>
                          <ImBin style={{color: '#F4976C'}}/> */}
      
                </div>
            )
    }

function getTime(){
    const m = new Date();
    var dateString =
    m.getUTCFullYear() + "/" +
    ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +
    ("0" + m.getUTCDate()).slice(-2) + " " +
    ("0" + (m.getUTCHours()+7)).slice(-2) + ":" +
    ("0" + m.getUTCMinutes()).slice(-2) + ":" +
    ("0" + m.getUTCSeconds()).slice(-2);
    return dateString;
}

var key = [];
var answers = [];
var timee = '';
function HomeAdmin(){
    const questions = useSelector(state => state.questions.questions.allQuestions);
    const userLog = useSelector(state => state.auth.login.currentUser);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [image, setImage] = useState();
    const [title, setTitle] = useState('');
    const [answerA, setAnswerA] = useState('');
    const [answerB, setAnswerB] = useState('');
    const [answerC, setAnswerC] = useState('');
    const [answerD, setAnswerD] = useState('');
    const [checkedState, setCheckedState] = useState(new Array(5).fill(false))
    const handleCheckbox = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item );
        setCheckedState(updatedCheckedState);

        key = updatedCheckedState.reduce((key, currentState, index) => {
            if(currentState) key.push(index);
            return key;
      }, [])
    }
    const newQuestion = {
        question: title,
        answer: answers,
        key: key,
    }
    useEffect(() => {
        if(!questions){
            getAllQuestions(userLog?.accessToken,dispatch);
        }
    })

    var formData = new FormData();
    formData.append('file', image);
    formData.append('question', newQuestion);
    // const formData = {
    //     file: image,
    //     question: newQuestion
    // }
    const handleSave = () => {
        if(answerA !== '') answers.push(answerA);
        if(answerB !== '') answers.push(answerB);
        if(answerC !== '') answers.push(answerC);
        if(answerD !== '') answers.push(answerD);
        timee = getTime();
        console.log(image); 
        console.log(newQuestion);
        addQuestion(formData, dispatch);
        key = [];
        answers = []
    }
    return(
        <section className="admin-section">
        <div className="row">
            <div className="col">
                <h2>Thông tin bài kiểm tra</h2>
                <form> 
                    <label htmlFor="test-name">Tên</label><br />
                    <input className="input-test-name" name='test-name' value="Kiểm tra quy chế kì 20221" type="text"></input>
                </form>
                <form>
                    <label htmlFor="time">Thời gian (phút)</label><br />
                    <input className="input-time" name='time' defaultValue={time} type="text"></input>
                </form>
                <label>Câu hỏi</label>
                <button className='btn-add-question' onClick={() => setShow(true)}><FaPlus/><h4>Thêm câu hỏi</h4></button>
                {
                    show ? (
                <form className='form-add-question'>
                    <label htmlFor="image">Hình ảnh</label>
                    <input type="file" id='image' name='image' 
                        onChange = { (e) =>setImage(e.target.files[0])}/>
                    <br />
                    <label htmlFor="title">Câu hỏi</label>
                    <input type="text" id='title' name='title' 
                        onChange = { (e) =>setTitle(e.target.value)}/>
                    <br />
                    <label htmlFor="a">Đáp án A</label>
                    <input type="text" id='a' name='a' 
                        onChange = { (e) =>setAnswerA(e.target.value)}/>
                    <br />
                    <label htmlFor="b">Đáp án B</label>
                    <input type="text" id='b' name='b' 
                        onChange = { (e) =>setAnswerB(e.target.value)}/>
                    <br />
                    <label htmlFor="c">Đáp án C</label>
                    <input type="text" id='c' name='c' 
                        onChange = { (e) =>setAnswerC(e.target.value)}/>
                    <br />
                    <label htmlFor="d">Đáp án D</label>
                    <input type="text" id='d' name='d' 
                        onChange = { (e) =>setAnswerD(e.target.value)}/>
                    <br />
                    <div className='key'>
                        <label htmlFor="key">Đáp án đúng</label>
                        <input type="checkbox" name='aa' id='aa' value={1}
                            checked={checkedState[1]}
                            onChange={() => {handleCheckbox(1)}}/>
                        <label htmlFor="aa">A</label>
                        <input type="checkbox" name='bb' id='bb' value={2}
                            checked={checkedState[2]}
                            onChange={() => {handleCheckbox(2)}}/>
                        <label htmlFor="bb">B</label>
                        <input type="checkbox" name='cc' id='cc'
                           value={3}
                           checked={checkedState[3]}
                           onChange={() => {handleCheckbox(3)}}/>
                        <label htmlFor="cc">C</label>
                        <input type="checkbox" name='dd' id='dd'
                          value={4}
                          checked={checkedState[4]}
                          onChange={() => {handleCheckbox(4)}}/>
                        <label htmlFor="dd">D</label>
                    </div>
                    {/* <label htmlFor="aa">A</label>
                    <input type="checkbox" name='aa' id='aa'/> */}
                </form>
                    ) : (Fragment)
                }
                <div className="question-list-ha">
                    {
                      questions ? (
                        questions.map((question, index) => (
                            <QuestionItem
                                index={index + 1}
                                question={question.question}
                                answers = {question.answer}
                                correctAnswers = {question.key}
                            />
                    ))) : (Fragment)
                    }   
                </div>
            </div>
            <div className="col" id='col-2'>
                <h3>Test summary</h3>
                <div className='questions-summary'>
                    <label>Questions</label>
                    <div>
                    <h4 className='num-of-questions' >{questions?.length}</h4>
                    <p> Elements</p>
                    </div>
                    <a href="#"><FaPlus style={{marginRight: '5px',position: 'relative',top:'2px'}}/>Add question</a>
                </div>

                <div className='responses-summary'>
                    <label>Responses</label>
                    <h4 className='num-of-responses' >73</h4>
                    <p> Students</p>
                    <a href="#"><FaEye style={{marginRight: '5px',position: 'relative',top:'2px'}}/>View results</a>
                    <br />
                    <label>Last edit</label>
                    <br />  
                    <p id="last-edit">{getTime()}</p>
                    <a href="#"><button className='btn-save-changes' onClick={handleSave}><h4>Lưu thay đổi</h4></button></a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HomeAdmin