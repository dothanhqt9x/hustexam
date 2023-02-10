import { useState } from 'react';
import './login.css';
import { getAllQuestions, loginUser } from '../../../redux/apiRequest';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {Routes, Route, Link} from 'react-router-dom';
import Signup from '../signup/signup';
import Validator from '../../../validator';
// import setupProxy from '../../setupProxy';
function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLog = useSelector((state) => state.auth.login?.currentUser);
    const handleLogin = (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password
        }
        loginUser(newUser, dispatch, navigate);

        // getUserInfo(userLog?.accessToken, dispatch)
        }
    // Validator({
    //     form: '#form-login',
    //     formGroupSelector: '.form-group',
    //     errorSelector: '.form-message',
    //     rules: [
    //         Validator.isRequired('#email'),
    //         Validator.isRequired('#password'),
    //         Validator.isEmail('#email'),
    //         Validator.minLength('#password', 6),
    //     ],
    // })
    return(
        <div className="login">
            <section className="heading-log">
            <h1>Login</h1>
            </section>

            <section className="main-log">
            <div className="row">
            <div className="column-log"></div>
                <div className="column-log" id='column-login'>
                    <h2>LOG IN</h2>
                    <form id='form-login'>
                        <div className='form-group'>
                        <input type="email" className="input-box" placeholder="Email" 
                            id="email" name="email" 
                            onChange = { (e) =>setEmail(e.target.value)}/>
                            <span className="form-message"></span>
                        </div>
                        <div className='form-group'>
                        <input type="password" className="input-box" placeholder="Password" 
                            id="password" name="password" 
                            onChange = {(e)=>setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn-login btn-primary" onClick={handleLogin}>LOG IN</button>
                        <Link to='/signup'><button type="submit" className="btn-signup btn-primary " style={{color: 'white'}}>OR SIGNUP</button></Link>
                        <Routes>
                            <Route path="/signup/*" element={<Signup/>}
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

export default Login