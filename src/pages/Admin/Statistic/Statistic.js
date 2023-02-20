import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getHistoryDetail, getStatisticByFilter, getStatisticBySearch } from '../../../redux/apiRequest';
import './Statistic.css';

function Statistic(){
    const [keyword, setKeyWord] = useState();
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(20);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const list = useSelector(state => state.dashboard.statistic?.list);
    useEffect(()=>{
        getStatisticByFilter(min, max, dispatch, navigate)
    },[])
    const handleSearch = () => {
      if(keyword === ''){ 
        getStatisticByFilter(min, max, dispatch, navigate);
        return;
      }
        getStatisticBySearch(keyword, dispatch, navigate);
        setKeyWord('')
        setShow(true);
    }
    const handleFilter = () => {
        getStatisticByFilter(min, max, dispatch, navigate);
        setShow(true);
    }
    const watchHistoryDetail = (id) => {
        getHistoryDetail(id, dispatch, navigate, '/historydetailAdmin');
    }
    return(
        <div className='statistic'>
            <h2>Thống kê điểm làm bài của sinh viên</h2>
            <div className='head-statistic'>
                <div className='search'>
                    <input type="text" defaultValue={keyword} placeholder='Nhập MSSV để tìm kiếm' onChange={(e) => setKeyWord(e.target.value)}/>
                    <button className='btn-search' onClick={handleSearch}>Tìm kiếm</button>
                </div>
                <div className='filter'>
                    <p>Sinh viên có điểm từ <input type="number" min = "0" max="10" step = "0.5" defaultValue="0" onChange={(e) => setMin(e.target.value * 2)}/> đến 
                        <input type="number" min = "0" max="10" step = "0.5" defaultValue="10" onChange={(e) => setMax(e.target.value * 2)}/></p>
                    <button className='btn-filter' onClick={handleFilter}>Lọc</button>
                </div>
            </div>
           {show ? (<p style={{marginTop: '20px'}}>Tìm thấy {list.length} kết quả</p>) : Fragment} 
  { list?.length > 0 ? (
          <table className="table table-hover">
              <thead className="thead-light">
              <tr>
                <th scope="col">MSSV</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Điểm</th>
                <th scope="col">Thời gian làm bài</th>
              </tr>
              </thead>
              <tbody>
                  {list.map((item, index) => {
                      return(
                        <tr key={index} onClick = {() => {watchHistoryDetail(item.id)}}>
                          <th scope="row">{item?.mssv}</th>
                          <td>{item?.name}</td>
                          <td>{item?.score / 2}</td>
                          <td>{item?.time}</td>
                        </tr>
                      )
                  })}
              </tbody>
        </table>
    ) : (Fragment)}
        </div>
    )
}

export default Statistic;