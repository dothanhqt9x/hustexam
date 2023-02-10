import { useDispatch, useSelector } from "react-redux"
import { Fragment, useState } from "react";
import './School.css'
import {FaPlus} from 'react-icons/fa'
import { addSchool, changeSchoolName, getAllSchools } from "../../../redux/apiRequest";
import { useNavigate } from "react-router-dom";
function School(){
    const allSchools = useSelector(state => state.school.schools.allSchools);
    const [show, setShow] = useState(false);
    const [school, setSchool] = useState('');
    const [id, setId] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const newSchool = {
        schoolName: school
    }
    const newSchoolName = {
        id: id,
        schoolName: school
    }
    const handleEditSchool = () => {
        changeSchoolName(newSchoolName, dispatch);
        getAllSchools(dispatch, navigate);
        setShow(false);
    }
    const handleAddSchool = () => {
        addSchool(newSchool, dispatch);
        getAllSchools(dispatch, navigate);
        setSchool('');
    }
    return(
        <div className="school">
            <h3>Danh sách trường/viện thuộc Đại học Bách Khoa Hà Nội</h3>
            {
                allSchools ? (
                    <ul>
                        {
                        allSchools.map((school, index) => {
                            return(
                                <div>
                                    <li key={index}  onClick = {(event) => {
                                        if (event.detail === 2){
                                            setShow(!show)
                                            setId(school.id)
                                        }
                                        }
                                        }>{school.name}</li>
                                    { (show && school.id === id) ? (
                                        <div>
                                            <input className="input-edit-school" type="text" defaultValue={school.name}
                                            onChange={(e) => setSchool(e.target.value)}/>
                                            <button className='btn-edit-school' onClick={handleEditSchool}><h4>Thay đổi</h4></button>
                                        </div>
                                    ) : Fragment}
                                </div>
                            )
                        })
                        }
                    </ul>
                ) : (Fragment)
            }   
            <div className="add-school">
                <form>
                    <input className="input-add-school" type="text" placeholder="Tên trường/viện"
                        onChange={(e) => setSchool(e.target.value)}/>
                </form>
                <button className='btn-add-school' onClick={handleAddSchool}><FaPlus/><h4>Thêm</h4></button>
            </div>
        </div>
    )
}

export default School