import logo from './logo.jpg'
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutStart, logOutSuccess } from '../../../redux/authSlice';
import { getAllDocuments, getAllSchools } from '../../../redux/apiRequest';
import './Header.css'

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateHome = () => {
    navigate('/homeadmin');
  }

  const handleLogout = () => {
     dispatch(logoutStart());
     dispatch(logOutSuccess());
     navigate('/login');
  }
  
  const handleClickLogo = () => {
    navigate('/homeadmin');
  }

  return (
    <div className="Header"> 
        <header className='App-header'>
                <img src={logo} alt="logo" className="logo" onClick={handleClickLogo}/>
                <a style={{textDecoration: 'none'}} href='#!'><h3 className="app-name">HustExam</h3></a>
                <div>
        <nav className="navbar navbar-expand-lg navbar-light navbar-custom" id="navbar">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
            <a className="nav-link"  href='#!' onClick={() => navigate('/homeadmin')}>Câu hỏi</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href='#!' onClick={() => {
                getAllSchools(dispatch);
                navigate('/school');
              }}>Trường/Viện</a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href='#!' onClick={() => {
                  getAllDocuments(dispatch);
                  navigate('/documentAdmin');
              }}>Tài liệu</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link"  href='#!' onClick={() => {
                  navigate('/dashboard');
              }}>Dashboard</a>
            </li> 
          </ul>
        </div>
        <div className='admin'>
            <p>Admin</p>
            <Link to='/login' className='header-logout' onClick={handleLogout}><button>Đăng xuất</button></Link>
        </div>
      </nav>
      </div>
        </header>
    </div>
  );
}

export default Header;