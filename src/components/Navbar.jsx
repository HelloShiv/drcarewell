import React, { useEffect, useState } from "react";
import logo from '../images/logo.png'
import "../styles/navbar.css";
import Button from '../components/Button'

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
          <li><a href="/">Home</a></li>
          <li><a href="/LostAndFound">About</a></li>
          <li><a href="/Marketplace">Services</a></li>
          <li><a href="/Marketplace">Contact</a></li>
          <li><a href="/Marketplace"><Button name="Book Appointment"/></a></li>
        </ul>
        <h1 className="logo"><img src={logo}></img>Dr. Carewell</h1>
      </div>
    </nav>
  );
}

export default Navbar;
