import { Link as ScrollLink } from 'react-scroll';
import logo from '../images/logo.png'
import "../styles/navbar.css";
import Button from "../components/Button.jsx"


function Navbar() {   
  return (
    <nav className="navbar prevent-select">
      <div className="navbar-container container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
        <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
        <li><ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></li>
        <li><ScrollLink to="bookAppointment" smooth={true} duration={500}><Button name="Book Appointment"/></ScrollLink></li>
      </ul>
        <h1 className="logo"><img src={logo}></img>Dr. Carewell</h1>
      </div>
    </nav>
  );
}

export default Navbar;
