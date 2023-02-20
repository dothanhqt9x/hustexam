// import { point, time } from '../TakeExam/Take_Exam'
import './HistoryDetail.css'
import {Routes, Route, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import HistoryList from '../history_list/HistoryList';
function QuestionItem(question){
            const ansChar = ['A','B','C','D','E','F'];
            return(
                <div className = 'question-ha'>
                          <div className="body" style={{backgroundColor: (question.flag === 0) ? 'rgb(251, 165, 165)' : 'rgb(150, 227, 150)'}}>
                              <h3 className="id-his">Câu {question.index + 1}</h3>
                              <p className="title-his">{question.question}</p>
                              <div className='question-details'>
                                <ol className='list-answers'>
                                    {question.answers?.map((answer, index) => {
                                        return(
                                        <li className='answer-his' key={index}
                                            // style = {(index + 1 === question?.answers[0]) ? {backgroundColor: 'red'} : {}}
                                            >{answer}</li>
                                        )
                                    })}
                                </ol>
                                <p>Câu trả lời của bạn: {ansChar[question.answersChoose[0] - 1]} {ansChar[question.answersChoose[1] - 1]}</p>
                              </div>
                          </div>
                </div>
            )
    }
function HistoryDetail(){
    const questionsAnsweredList = useSelector(state => state.times.times.questionsAnswered);
    const calculatePoint = () => {
        let point = 0;
        for(let i = 0; i < questionsAnsweredList.length; i++){
            point+= questionsAnsweredList[i].flag;
        }
        return point;
    }
    const point = calculatePoint();
    console.log(questionsAnsweredList);
    return(
        <section className="admin-section">
        <div className="row">
            <div className="col"  style={{marginBottom: '30px'}}>
                <h4>Điểm: {point}/20</h4>
                <div className="question-list-his">
                    {questionsAnsweredList?.map((question, index) => (
                        <QuestionItem key={index}
                            index={index}
                            question={question.question}
                            answers = {question.answer}
                            answersChoose = {question.chooses}
                            flag = {question.flag}
                        />
                    ))}
                </div>
                <Link to='/historylist'>Finish review</Link>
                 <Routes>
                    <Route path="/historylist/*" element={<HistoryList/>} />
                </Routes> 
            </div>
        </div>
    </section>
    )
}

export default HistoryDetail