import './Header.css';
import logo from './image/logo.jpg'
import avt from './image/avt.jpg'
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import Login from '../../../../pages/Authentication/login/login';
import Signup from '../../../../pages/Authentication/signup/signup';
import ChangePassword from '../../../../pages/Authentication/change_password/changePassword';
import UserInfo from '../../../../pages/User/user_info_detailed/UserInfo';
import { useDispatch, useSelector } from 'react-redux';
import { logoutStart, logOutSuccess } from '../../../../redux/authSlice';
import { getAllDocuments, getHistory } from '../../../../redux/apiRequest';

function Header() {
  const userInfo = useSelector(state => state.user.user.userInfo);
  const userLog = useSelector(state => state.auth.login.currentUser);
  let url = '#';
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateHome = () => {
    navigate('/');
  }

  const handleLogout = () => {
     dispatch(logoutStart());
     dispatch(logOutSuccess());
     navigate('/login');
  }
  
  const handleClickLogo = () => {
    navigate('/');
  }

  const handleWatchHistory = (e) => {
      getHistory(dispatch,  navigate);
      navigate('/historylist')

  }
  return (
    <div className="Header"> 
      <header className="App-header">
      <img src={logo} alt="logo" className="logo"/>
      <a style={{textDecoration: 'none'}} href={url}><h3 className="app-name" onClick={handleClickLogo}>HustExam</h3></a>
            <div>
              <nav className="navbar navbar-expand-lg navbar-light navbar-custom" id="navbar">
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                  <a className="nav-link"  href={url} onClick={navigateHome}>Trang chủ</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"  href='#!' onClick={() => {
                        getAllDocuments(dispatch, navigate);
                        navigate('/document');
                    }}>Tài liệu</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"  href='#!' onClick={() => {
                        navigate('/forum');
                    }}>Q&A</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link"  href='#footer'>Liên hệ</a>
                  </li>  
                </ul>
              </div>
            </nav>
        {userLog ? (
        <div className="user-info">
            <a href="/userInfo"><img src={userInfo?.avatar ? userInfo.avatar : avt} alt="avatar" className='avatar'/></a>
            <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown" 
                  style={{color :'black', backgroundColor: 'white',borderColor: 'white',marginTop: '5px'}}>{userInfo?.username}</button>
            <ul className="dropdown-menu" >
              <Link to='/userinfo'>Xem thông tin cá nhân</Link>
              <br />
              <li><a href={url} onClick={handleWatchHistory}>Xem lịch sử làm bài</a></li>
              <Link to='/changepw'>Đổi mật khẩu</Link>
              <br />
              <li><a href={url} onClick={handleLogout}>Đăng xuất</a></li>
              <Routes>
                        <Route path="/changepw" element={<ChangePassword/>} />
                        <Route path="/userinfo" element={<UserInfo/>} />
              </Routes> 
            </ul>
        </div>
        </div>):
      (
        <div className='btn-header'>
        <Link to='/login' className='header-login'><button>Đăng nhập</button></Link>
        <Link to='/signup' className='header-register'><button>Đăng ký</button></Link>
        <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>}/>
        </Routes> 
        </div>
      )}
      </div>
      </header>
    </div>
  );
}

export default Header;
