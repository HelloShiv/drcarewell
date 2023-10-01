import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Modal , Button as AntButton } from 'antd';
import logo from '../images/logo.png'
import "../styles/navbar.css";
import CustomButton from "../components/Button.jsx"


function Navbar() {   
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
        <li><ScrollLink to="bookAppointment" smooth={true} duration={500}><CustomButton className="overBtn"name="Book Appointment" onClick={showModal} />
        </ScrollLink></li>
      </ul>
        <h1 className="logo"><img src={logo}></img>Dr. Carewell</h1>
      </div>

      <Modal
          title={
            <span style={{ fontSize: '24px' , marginRight:"2vw" }}>Book an Appointment</span>
          }
          centered
          visible={isModalVisible}
          onCancel={handleCancel}
          style={{
            fontSize:"3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            width: "60vw", // Adjust the width as needed
          }}
          footer={[
            <AntButton key="cancel" onClick={handleCancel}>
              Cancel
            </AntButton>,
          ]}
        >
          <div style={{ fontSize: '18px' , marginRight:"2vw"}}>
            Contact us at: <strong>+916381601020</strong>
          </div>
        </Modal>
    </nav>
  );
}

export default Navbar;
