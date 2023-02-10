import './Footer.css';
import {FaLinkedin} from 'react-icons/fa'
import {FaGooglePlusG} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer text-center text-lg-start" id="footer">
    <div >
      <div className="container">
          <a href="#!"><h2 className="h2-footer">HustExam</h2></a>
          <div className="row-footer">
            <div className="column-footer">
              <a href="#!"><h3>My Company</h3></a>
              <a href="#!"><h4>Home</h4></a>
              <a href="#!"><h4>Products</h4></a>
              <a href="#!"><h4>News</h4></a>
            </div>
            <div className="column-footer" >
              <a href="#!"><h3>Bookmark and Follow</h3></a>
              <a href="#!"><FaFacebookSquare/><h4>Facebook</h4> </a>
              <a href="#!"><FaGithub/><h4>Github</h4></a>
            </div>
            <div className="column-footer" >
              <a href="#!"><h3>Bookmark and Follow</h3></a>
              <a href="#!"><FaFacebookSquare/><h4>Facebook</h4> </a>
              <a href="#!"><FaGithub/><h4>Github</h4></a>
            </div>
          </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
