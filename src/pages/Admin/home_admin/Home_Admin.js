/* eslint-disable jsx-a11y/anchor-is-valid */
// import './vendors/grid.css'
// import './index.css'
import './Home_Admin.css'
import {FaPlus} from 'react-icons/fa'
import {FaEye} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { editDocument, getQuestionsAdmin, getStatisticByFilter } from '../../../redux/apiRequest';
import { Fragment } from 'react';
import { addQuestion, editQuestion } from '../../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';

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
var keyEdit = [];
var answers = [];
var timee = '';
var page = 0;
function HomeAdmin(){
    const questions = useSelector(state => state.questions.questionsAdmin?.allQuestions);
    const listResponses = useSelector(state => state.dashboard.statistic?.list);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [image, setImage] = useState();
    const [title, setTitle] = useState('');
    const [answerA, setAnswerA] = useState('');
    const [answerB, setAnswerB] = useState('');
    const [answerC, setAnswerC] = useState('');
    const [answerD, setAnswerD] = useState('');
    const [answers, setAnswers] = useState([]);
    const [id, setId] = useState();
    const navigate = useNavigate();
    const [checkedState, setCheckedState] = useState(new Array(5).fill(false))
    // edit 
    const [showEdit, setShowEdit] = useState(false);
    const [titleEdit, setTitleEdit] = useState(''); 
    const [answerAEdit, setAnswerAEdit] = useState('');
    const [answerBEdit, setAnswerBEdit] = useState('');
    const [answerCEdit, setAnswerCEdit] = useState('');
    const [answerDEdit, setAnswerDEdit] = useState('');
    const [answersEdit, setAnswersEdit] = useState([]);

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
    const editNewQuestion = {
        question: titleEdit,
        answer: answersEdit,
        key: key
    }
    useEffect(() => {
            getQuestionsAdmin(0,dispatch, navigate);
            getStatisticByFilter(0,20,dispatch, navigate);
    },[])
    var formData = new FormData();
    formData.append('question', JSON.stringify(newQuestion));
    formData.append('file', JSON.stringify(image));
    const handleSave = () => {
        if(answerA !== '') answers.push(answerA);
        if(answerB !== '') answers.push(answerB);
        if(answerC !== '') answers.push(answerC);
        if(answerD !== '') answers.push(answerD);
        timee = getTime();
        console.log(image);
        addQuestion(formData, dispatch);
        setCheckedState(new Array(5).fill(false));
        key = [];
        answers = []
        setShow(false);
    }

    const handleEdit = () => {
        if(answerAEdit !== '') answersEdit.push(answerAEdit);
        if(answerBEdit !== '') answersEdit.push(answerBEdit);
        if(answerCEdit !== '') answersEdit.push(answerCEdit);
        if(answerDEdit !== '') answersEdit.push(answerDEdit);
        // timee = getTime();
        // console.log(image);
        console.log(id);
        console.log(editNewQuestion);
        editQuestion(id, editNewQuestion, dispatch);
        setCheckedState(new Array(5).fill(false));
        key = [];
        answersEdit = []
        setShowEdit(false);
    }

    return(
        <section className="admin-section">
        <div className="row">
            <div className="col">
                <label>Câu hỏi</label>
                <button className='btn-add-question' onClick={() => setShow(!show)}><FaPlus/><h4>Thêm câu hỏi</h4></button>
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

                            <>
                            <QuestionItem
                                index={question.questionNumber}
                                question={question.question}
                                answers = {question.answer}
                                correctAnswers = {question.key}
                            />
                            <button className='btn-edit' onClick={() => {
                                            setShowEdit(!showEdit)
                                            setId(question.questionNumber)
                                            }}><h4>Sửa</h4></button>
                             { (showEdit && question.questionNumber === id) ? (
                                <form className='form-add-question'>
                    <label htmlFor="title">Câu hỏi</label>
                    <input type="text" id='title' name='title'  placeholder={question.question}
                        onChange = { (e) =>setTitleEdit(e.target.value)}/>
                    <br />

                    
                    {/* {question.answer?.map((answer, index) => {
                                        return(
                                        <input type="text" className='answer-his' onChange={(e) => setAnswersEdit(e.target.value)} key={index} defaultValue={answer}></input>
                                        )
                                    })} */}

                                    <br />
                    <label htmlFor="a">Đáp án A</label>
                    <input type="text" id='a' name='a' 
                        onChange = { (e) =>setAnswerAEdit(e.target.value)} placeholder={question.answer[0]}/>
                    <br />
                    <label htmlFor="b">Đáp án B</label>
                    <input type="text" id='b' name='b' 
                        onChange = { (e) =>setAnswerBEdit(e.target.value)} placeholder={question.answer[1]}/>
                    <br />
                    <label htmlFor="c">Đáp án C</label>
                    <input type="text" id='c' name='c' 
                        onChange = { (e) =>setAnswerCEdit(e.target.value)} placeholder={question.answer[2]}/>
                    <br />
                    <label htmlFor="d">Đáp án D</label>
                    <input type="text" id='d' name='d' 
                        onChange = { (e) =>setAnswerDEdit(e.target.value)} placeholder={question.answer[3]}/>
                    <br />                    
                
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

                    <button className='btn-edit-doc' onClick={handleEdit}><h4>Xác nhận</h4></button>
                    {/* <label htmlFor="aa">A</label>
                    <input type="checkbox" name='aa' id='aa'/> */}
                </form>
                                ) : Fragment}
                            </>
                          
                    ))) : (Fragment)
                    }   
                </div>
            </div>
            <div className="col" id='col-2'>
                <h3>Test summary</h3>
                <div className='questions-summary'>
                    <label>Questions</label>
                    <div>
                    <h4 className='num-of-questions' >200</h4>
                    <p> Elements</p>
                    </div>
                </div>

                <div className='responses-summary'>
                    <label>Responses</label>
                    <h4 className='num-of-responses' >{listResponses?.length}</h4>
                    <p> Times</p>
                    <a href='#' onClick={() => navigate('/statistic')}><FaEye style={{marginRight: '5px',position: 'relative',top:'2px'}}/>View results</a>
                    <br />
                    <label>Last edit</label>
                    <br />  
                    <p id="last-edit">{timee}</p>
                    <a href="#"><button className='btn-save-changes' onClick={handleSave}><h4>Lưu thay đổi</h4></button></a>
                </div>
            </div>
        </div>
        <nav aria-label="...">
                <ul className="pagination" style={{marginLeft: '270px'}}>
                    <li className="page-item">
                    <a className="page-link" href="#!" onClick={() => {
                            if(page === 0) return;
                            page--;
                            getQuestionsAdmin(page, dispatch, navigate);
                        }}>Previous</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#!" onClick={() => {
                            page = 0;
                            getQuestionsAdmin(0, dispatch, navigate);
                        }}>1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#!" onClick={() => {
                            page = 1;
                            getQuestionsAdmin(1, dispatch, navigate);
                        }}>2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#!" onClick={() => {
                            page = 2;
                            getQuestionsAdmin(2, dispatch, navigate);
                        }}>3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#!" onClick={() => {
                            page++;
                            getQuestionsAdmin(page, dispatch, navigate);
                        }}>Next</a>
                    </li>
                </ul>
            </nav>
    </section>
    )
}

export default HomeAdmin