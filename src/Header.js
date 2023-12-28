import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import metovo from './Images/metovo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
function Header(){
    return(
        <>
        <div class='container header-top-bar'>
        <div class='logo-metovo'>
        <img src='https://harnishdesign.net/demo/html/metovo/images/logo.png' class='image'></img>
        </div>
        <div class='toggle'>  <Navbar.Toggle aria-controls="navbarScroll" /></div>
        <div class='navbar-link-section'>
          <ul class='list-unstyled d-flex'>
            <li class='list-link-style'>Explore</li>
            <li class='list-link-style'>About</li>
            <li class='list-link-style'>Stats</li>
            <li class='list-link-style'>Features</li>
            <li class='list-link-style'>Pages</li>
          </ul>
        </div>
        <div class='searchbar mb-2 mb-lg-0 me-lg-2'>
                  <div className="d-flex">
                    <span class="glyphicon glyphicon-search"></span>
                    <input class="form-control me-2" type="text" placeholder="Search"/>
                    <a class='create-link'>Create</a>
                    <Button variant="outline-success sign-button-style" >Sign In</Button>
                  </div>
                </div>
      </div>
      </>
    )
}
export default Header;