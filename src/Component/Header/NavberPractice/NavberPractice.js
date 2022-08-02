import { signOut } from 'firebase/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';

import './NavbarPractice.css'

function NavberPractice() {
  const [user]=useAuthState(auth)
  const handleSignOut=()=>{
    signOut(auth);
  }
  return (
      <div>
        <div className="container">
        
        {/* <CustomCustomLink></CustomCustomLink> */}
<nav className="navbar navbar-expand-lg navbar-light ">
  <CustomLink className="navbar-brand" to="/">
  <img style={{width:"150px"}} src="https://i.ibb.co/qmMRVgd/Urban-Riders.png" alt="" />
  </CustomLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse HeaderLeftToRight"  id="navbarNav">
  <ul className="navbar-nav ml-auto">
  <li className="nav-item active">
  <CustomLink className="nav-CustomLink HeaderLeftToRight" to="/">Home {/* <span className="sr-only">(current)</span>*/} </CustomLink>
  </li>
  <li className="nav-item HeaderLeftToRight">
  <CustomLink className="nav-CustomLink" to={'/home/'+ 2}>Destination</CustomLink>
  </li>
  <li className="nav-item HeaderLeftToRight">
  <CustomLink className="nav-CustomLink" to="/blog">Blog</CustomLink>
  </li>
  <li className="nav-item HeaderLeftToRight">
  <CustomLink className="nav-CustomLink" to="/contact">Contact</CustomLink>
  </li>
  {/* <li className="nav-item">
  {loggedInUser.email? 
  <CustomLink className="nav-CustomLink" to="">{loggedInUser.displayName}</CustomLink>
  :<CustomLink className="nav-CustomLink loginBtn text-white " to="/login">Login</CustomLink>}
  </li> */}
  <li className="nav-item HeaderLeftToRight">
  {
    user ?
    <button style={{backgroundColor:"#FF6E40"}}  onClick={handleSignOut}>SignOut</button>
    :
    // <CustomLink className="nav-CustomLink" to=""></CustomLink>
    <CustomLink className="nav-CustomLink loginBtn text-white " to="/login">Login</CustomLink>
  }
  </li>
  </ul>
  </div>
  </nav>
  </div>
      </div>
  );
}

export default NavberPractice;