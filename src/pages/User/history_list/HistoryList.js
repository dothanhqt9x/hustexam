import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import './HistoryList.css'
import { getHistoryDetail } from "../../../redux/apiRequest";

function HistoryList(){
    const list = useSelector(state => state.history.history.list);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ID, setID] = useState();
    const handleSeeDetails = (id) =>{
        console.log(id);
        getHistoryDetail(id, dispatch, navigate);
    }
    return(
        <div className="history-list">
            <h3>Lịch sử làm bài thi</h3>
            {
                list ? (
                   <ul>
                     {
                        list.map((times, index) => {
                            return(
                                <div className="times" key={index}>
                                    <li>Lần {index + 1}: {times.name}</li>
                                    <a href="#!" onClick={handleSeeDetails(times.id)}>Xem chi tiết</a>
                                </div>
                            )
                        })
                     }
                   </ul>
                ) : (Fragment)
            }
        </div>
    )
}

export default HistoryList