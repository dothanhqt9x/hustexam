import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePasswordUser } from '../../../redux/apiRequest';
import './changePassword.css';

function ChangePassword(){
    const [password, setPassword] = useState("");
    // const [fullname, setFullname] = useState("");
    // const [mssv, setmssv] = useState("");
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const newPassword = {
        password: password
    }
    const handleChangePW = (e) => {
        e.preventDefault();
        changePasswordUser( newPassword, dispatch, navigate);
    }
    return(
        <div className="login" id='change-password'>
            <section className="heading-log">
            <h1>ĐỔI MẬT KHẨU</h1>
            </section>

            <section className="main-log">
            <div className="row">
            <div className="column-log"></div>
                <div className="column-log" id='column-login'>
                    <h2>Đổi mật khẩu</h2>
                    <form>
                        <input type="password" className="input-box" placeholder="Mật khẩu hiện tại" 
                            id="password" name="password"/>
                        <input type="password" className="input-box" placeholder="Mật khẩu mới" 
                            id="new-password" name="password"  
                            onChange = {(e)=>setPassword(e.target.value)}/>
                        <input type="password" className="input-box" placeholder="Nhập lại mật khẩu mới" 
                            id="re-new-password" name="password"/>
                        <button type="submit" className="btn-login btn-primary" onClick={handleChangePW}>Xác nhận</button>
                    </form>
                </div>
                <div className="column-log"></div>
        </div>
    </section>
    </div>
    )
}

export default ChangePassword