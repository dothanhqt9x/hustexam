import { useDispatch, useSelector } from "react-redux"
import { Fragment, useState } from "react";
import {FaPlus} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
import { addDocument, deleteDocument, editDocument, getAllDocuments } from "../../../redux/apiRequest";
import './Document.css'
function Document(){
    const allDocuments = useSelector(state => state.document.documents.allDocuments);
    const [show, setShow] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [document, setDocument] = useState();
    const [id, setId] = useState();
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const newSchool = {
    //     schoolName: school
    // }
    // const newSchoolName = {
    //     id: id,
    //     schoolName: school
    // }
    var formData = new FormData();
    formData.append('name', name);
    formData.append('file', document);
    const handleAdd = () => {
        console.log(name);
        console.log(document);
        addDocument(formData, dispatch);
        getAllDocuments(dispatch, navigate);
        setShowAdd(false);
    }
    const handleEdit = () => {
        console.log(name);
        console.log(document);
        editDocument(id, formData, dispatch);
        getAllDocuments(dispatch, navigate);
        setShow(false);
    }
    const handleDelete = () => {
        console.log(id);
        deleteDocument(id, dispatch);
        getAllDocuments(dispatch, navigate);
    }
    return(
        <div className="school">
            <h3>Tài liệu tham khảo</h3>
            {
                allDocuments ? (
                    <ul>
                        {
                        allDocuments.map((document, index) => {
                            return(
                                <div>
                                    <div style={{display: 'flex'}}>
                                    <li key={index}  onClick = {(event) => {
                                        if (event.detail === 2){
                                            setId(document.id)
                                        }
                                        }
                                        }><a href={document.link}>{document.name}</a></li>
                                        <button className='btn-edit' onClick={() => {
                                            setShow(!show)
                                            setId(document.id)
                                            }}><h4>Sửa</h4></button>
                                        <button className='btn-delete' onClick={() => {
                                            setId(document.id);
                                            handleDelete();
                                            }}><h4>Xóa</h4></button>
                                    </div>
                                    { (show && document.id === id) ? (
                                        <div>
                                            <input className="input-add" type="text" defaultValue={document.name}
                                                    onChange={(e) => setName(e.target.value)}/>
                                            <input type="file"
                                                    onChange={(e) => setDocument(e.target.files[0])}/>
                                            <button className='btn-edit-doc' onClick={handleEdit}><h4>Xác nhận</h4></button>
                                        </div>
                                    ) : Fragment}
                                </div>
                                
                            )
                        })
                        }
                    </ul>
                ) : (Fragment)
            }   
            <button className='btn-add' onClick={() => setShowAdd(!showAdd)}><FaPlus/><h4>Thêm tài liệu</h4></button>
            { showAdd ? (
            <div className="add-document">
                <form>
                    <input className="input-add" type="text" placeholder="Tên tài liệu"
                        onChange={(e) => setName(e.target.value)}/>
                    <input type="file"
                        onChange={(e) => setDocument(e.target.files[0])}/>
                </form>
                <button className='btn-add-doc' onClick={handleAdd}><h4>Xác nhận</h4></button>
            </div>) : Fragment
            }
        </div>
    )
}

export default Document