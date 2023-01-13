import { useState } from 'react';
import './signup.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../../redux/apiRequest';
function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [fullname, setFullname] = useState("");
    // const [mssv, setmssv] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password
        }
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
                        {/* <input type="text" className="input-box" placeholder="Full name" 
                            id="fullname" name="fullname" 
                            onChange = { (e) =>setFullname(e.target.value)}/>
                        <input type="text" className="input-box" placeholder="MSSV" 
                            id="MSSV" name="MSSV" 
                            onChange = { (e) =>setmssv(e.target.value)}/> */}
                        <input type="email" className="input-box" placeholder="Email" 
                            id="email" name="email" 
                            onChange = { (e) =>setEmail(e.target.value)}/>
                        <input type="password" className="input-box" placeholder="Password" 
                            id="password" name="password" 
                            onChange = {(e)=>setPassword(e.target.value)}/>
                        <input type="password" className="input-box" placeholder="Re-type password" 
                            id="password" name="password"/>
                        <button type="submit" className="btn-login btn-primary" onClick={handleSignup}>SIGN UP</button>
                    </form>
                </div>
                <div className="column-log"></div>
        </div>
    </section>
    </div>
    )
}

export default Signup