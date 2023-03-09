import { Fragment, useEffect, useState } from 'react';
import './signup.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { getAllSchools, registerUser } from '../../../redux/apiRequest';
import Login from '../login/login';
function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [mssv, setmssv] = useState("");
    const [idSchool, setIdSchool] = useState();
    const [gender, setGender] = useState("");
    const [role, setRole] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        getAllSchools(dispatch);
    },[])
    const allSchools = useSelector(state => state.school.schools.allSchools); 
    const handleSignup = (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password,
            name: fullname,
            schoolId: ~~idSchool,
            mssv: mssv,
            gender: gender,
            role: role,
        }
        if(email === "" || password === "" || fullname === ""|| mssv === ""
            || idSchool === undefined || gender === "" || role === ""){
                alert("Vui lòng nhập đủ các trường!")
                return;
            }
        else if(password !== rePassword) {
            alert("Mật khẩu nhập lại không trùng khớp!");
            return;
        }
        console.log(newUser);
        registerUser(newUser, dispatch, navigate);
    }
    return(
        <div className="login">
            <section className="heading-log">
            <h1>Signup</h1>
            </section>

            <section className="main-log">
            <div className="row">
            <div className="column-log"></div>
                <div className="column-log" id='column-login'>
                    <h2>SIGN UP</h2>
                    <form>
                        <input type="text" className="input-box" placeholder="Họ tên" 
                            id="fullname" name="fullname" 
                            onChange = { (e) =>setFullname(e.target.value)}/>
                        <input type="text" className="input-box" placeholder="MSSV" 
                            id="MSSV" name="MSSV" 
                            onChange = { (e) =>setmssv(e.target.value)}/>
                         <select name="school" id="school" onChange = { (e) =>setIdSchool(e.target.value)}>
                         <option value=''>Trường/Viện</option>
                                        {
                                            allSchools?.map((school, index) => {
                                                return(
                                                    <option key={index} value={school.id}
                                                        >
                                                        {school.name}
                                                    </option>
                                                )
                                            })
                                        }
                         </select>
                        <select name="gender" id="gender" onChange = { (e) =>setGender(e.target.value)}>
                            <option value=''>Giới tính</option>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                         </select>
                         <select name="role" id="role" onChange = { (e) =>setRole(e.target.value)}>
                            <option value=''>Chức vụ</option>
                            <option value="01">Sinh viên</option>
                            <option value="02">Giảng viên</option>
                         </select>
                        <input type="email" className="input-box" placeholder="Email" 
                            id="email" name="email" 
                            onChange = { (e) =>setEmail(e.target.value)}/>
                        <input type="password" className="input-box" placeholder="Mật khẩu (tối thiểu 8 kí tự, gồm cả chữ và số)" 
                            id="password" name="password" 
                            onChange = {(e)=>setPassword(e.target.value)}/>
                        <input type="password" className="input-box" placeholder="Nhập lại mật khẩu" 
                            id="password" name="password"
                            onChange = {(e)=>setRePassword(e.target.value)}
                            />
                        <button type="submit" className="btn-login btn-primary" onClick={handleSignup}>SIGN UP</button>
                        <Link to='/login'><button type="submit" className="btn-signup btn-primary " style={{color: 'white'}}>OR LOGIN</button></Link>
                        <Routes>
                            <Route path="/login" element={<Login/>}
                            />
                        </Routes> 
                    </form>
                </div>
                <div className="column-log"></div>
        </div>
    </section>
    </div>
    )
}

export default Signup