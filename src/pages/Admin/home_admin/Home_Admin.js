/* eslint-disable jsx-a11y/anchor-is-valid */
// import './vendors/grid.css'
// import './index.css'
import './Home_Admin.css'
import {FaPlus} from 'react-icons/fa'
import {FaEye} from 'react-icons/fa'
import {ImBin} from 'react-icons/im'

const time = 60;
const questions = [
    { 
        questionID: 1,
        title: 'Để hình thành kỷ luật học tập, sinh viên cần làm gì?',
        answerA: 'Rèn luyện tính tự giác khi học',
        answerB: 'Tuân thủ triệt để kế hoạch học tập đã đề ra',
        answerC: 'Tự rèn luyện bản thân theo kế hoạch học tập',
        answerD: 'Hình thành thói quen học tập hàng ngày, ghi chép bài, nghe giảng đầy đủ',
        answerCorrect: 'B',
        point: 1
    },
    {   
        questionID: 2,
        title: 'Trường Đại học Bách khoa Hà Nội được phong danh hiệu Anh Hùng Lao động thời kỳ đổi mới năm nào?',
        answerA: '2000',
        answerB: '2005',
        answerC: '2010',
        answerD: '2015',
        answerCorrect: 'A',
        point: 1
    },
    {   
        questionID: 3,
        title: 'Trong trường hợp nào sau đây thì shipper được vào trong trường?',
        answerA: 'Shipper giao đồ ăn thì được vào trong trường',
        answerB: 'Shipper giao hàng hóa thì được vào trong trường',
        answerC: 'Shipper giao đồ ăn hay hàng hóa đều được vào trong trường',
        answerD: 'Shipper giao đồ ăn hay hàng hóa đều không được vào trong trường',
        answerCorrect: 'D',
        point: 1
    },
    {   
        questionID: 4,
        title: 'Sinh viên cần lưu ý những quy định nào sau đây?',
        answerA: 'Sinh viên đến trường phải mang theo thẻ sinh viên, trang phục gọn gàng phù hợp với văn hóa Việt Nam và sự nghiêm túc của trường đại học.',
        answerB: 'Không được tự ý mang tài sản của trường ra ngoài khuôn viên trường',
        answerC: 'Sau 18h00 hàng ngày, không được tự ý tụ tập ở các khu vực công cộng thuộc khuôn viên của trường. Mọi hoạt động văn hóa, văn nghệ, thể dục thể thao tổ chức trong trường phải được sự đồng ý cho phép bằng văn bản của Nhà trường.',
        answerD: 'Không tự ý tổ chức các hoạt động quảng cáo, dịch vụ hoặc tổ chức đánh bạc trong khuôn viên trường dưới mọi hình thức.',
        answerCorrect: 'D',
        point: 1
    },
    {   
        questionID: 5,
        title: ' Trường Đại học Bách khoa Hà Nội được thành lập năm nào?',
        answerA: 'Năm 1955',
        answerB: 'Năm 1956',
        answerC: 'Năm 1957',
        answerD: 'Năm 1958',
        answerCorrect: 'B',
        point: 1
    },
    {   
        questionID: 6,
        title: ' Chương trình "Cốc trà đá vì cộng đồng" nếu được tổ chức sẽ diễn ra vào ngày nào trong tuần? ',
        answerA: 'Thứ Sáu',
        answerB: 'Thứ Ba',
        answerC: 'Thứ Năm',
        answerD: 'Thứ Bảy',
        answerCorrect: 'C',
        point: 1
    },
    {   
        questionID: 7,
        title: 'Để đạt được Danh hiệu Sinh viên 5 tốt, bạn cần đáp ứng đủ những tiêu chí nào sau đây?',
        answerA: 'Đạo đức tốt, Học tập tốt, Tình nguyện tốt, Sức khoẻ tốt, Hội nhập tốt',
        answerB: 'Đạo đức tốt, Rèn luyện tốt, Tình nguyện tốt, Thể lực tốt, Kĩ năng tốt',
        answerC: 'Đạo đức tốt, Học tập tốt, Tình nguyện tốt, Thể lực tốt, Hội nhập tốt',
        answerD: 'Đạo đức tốt, Học tập tốt, Lao động tốt, Thể lực tốt, Hội nhập tốt',
        answerCorrect: 'C',
        point: 1
    },
    {   
        questionID: 8,
        title: 'Hiện tại Đại học Bách khoa Hà Nội có bao nhiêu Trường, Viện đào tạo chuyên ngành?',
        answerA: '3 Trường và 11 Viện',
        answerB: '2 Trường và 10 Viện',
        answerC: '3 Trường và 10 Viện',
        answerD: '3 Trường và 12 Viện',
        answerCorrect: 'A',
        point: 1
    },
    {   
        questionID: 9,
        title: 'Địa chỉ email của Đoàn Thanh niên trường Đại học Bách khoa Hà Nội?',
        answerA: 'dtndhbkhn@hust.edu.vn',
        answerB: 'doanthanhnien@hust.edu.vn',
        answerC: 'dtn@hust.edu.vn',
        answerD: 'dtndhbk@hust.edu.vn',
        answerCorrect: 'C',
        point: 1
    },
    {   
        questionID: 10,
        title: 'Địa chỉ fanpage của trường Đại học Bách khoa Hà Nội là?',
        answerA: 'https://www.facebook.com/dhbk/',
        answerB: 'https://www.facebook.com/dhbkhanoi',
        answerC: 'https://www.facebook.com/ctsv.hust.edu.vn/',
        answerD: 'https://www.facebook.com/hoisinhvienbkhn',
        answerCorrect: 'B',
        point: 1
    },
    ]

function handleRemoveQuestion(index){
    console.log('removed');
    questions.splice(index, 1);
}
function QuestionItem(question){
            return(
                <div className = 'question-ha'>
                          <div class="body">
                              <h3 class="id">Câu {question.questionID}</h3>
                              <p class="title">{question.title}</p>
                              <div className='question-details'>
                                <ol className='list-answers'>
                                    <li><input type="text" defaultValue={question.answerA}/></li>
                                    <li><input type="text" defaultValue={question.answerB}/></li>
                                    <li><input type="text" defaultValue={question.answerC}/></li>
                                    <li><input type="text" defaultValue={question.answerD}/></li>
                                </ol>
                                <p>Correct Answer: <input type="text" defaultValue={question.answerCorrect}/></p>
                              </div>
                          </div>
                          <FaEye style={{color: '#24367e', marginRight: '10px'}}/>
                          <ImBin style={{color: '#F4976C'}} onClick = {handleRemoveQuestion(question.index)}/>
      
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

function HomeAdmin(){
    return(
        <section class="admin-section">
        <div class="row">
            <div class="col">
                <h2>Test information</h2>
                <form>
                    <label htmlFor="test-name">Test name</label><br />
                    <input className="input-test-name" name='test-name' defaultValue="Kiểm tra quy chế" type="text"></input>
                </form>
                <form>
                    <label htmlFor="time">Time (minute)</label><br />
                    <input className="input-time" name='time' defaultValue={time} type="text"></input>
                </form>
                <label>Questions</label>
                <a href="#"><button className='btn-add-question'><FaPlus/><h4>Add question</h4></button></a>
                <div className="question-list-ha">
                    {questions.map((question, index) => (
                        <QuestionItem
                            index={index}
                            questionID={index + 1}
                            title={question.title}
                            answerA = {question.answerA}
                            answerB = {question.answerB}
                            answerC = {question.answerC}
                            answerD = {question.answerD}
                            answerCorrect = {question.answerCorrect}
                        />
                    ))}
                </div>
            </div>
            <div class="col" id='col-2'>
                <h3>Test summary</h3>
                <div className='questions-summary'>
                    <label>Questions</label>
                    <div>
                    <h4 className='num-of-questions' >{questions.length}</h4>
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
                    <a href="#"><button className='btn-save-changes'><h4>Save changes</h4></button></a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default HomeAdmin