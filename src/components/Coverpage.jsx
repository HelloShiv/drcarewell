import { Modal , Button as AntButton } from 'antd';
import React, { useState } from 'react';
import Navbar from "./Navbar";
import Bundle from "./Bundle"
import Button from "./Button.jsx";
import Footer from "./footer.jsx";
import "../styles/herosection.css"
import "../styles/services.css";
import "../styles/features.css";
import "../styles/contact.css"

import Map from "./Map"
import cover from "../images/cover.jpg"
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import hospital from "../images/Hospital-drcarewell.png"
import gmail from "../images/gmail.png";
import f1img from "../images/f1.jpg";
import f2img from "../images/f2.jpg";
import f3img from "../images/f3.jpg";
import f4img from "../images/f4.jpg";
import comma from "../images/comma.png";
import CustomButton from "./Button.jsx";


function Coverpage(){
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    return(
       <div className="envelope" style={{overflowX:"hidden"}}>

        <div className="herosection" id="home">

            <div className="image-with-gradient" style={{ backgroundImage: `url(${cover})` }}>
            <div className="gradient-overlay"></div> 
             <Navbar />
            </div>

            <div className="herosection-detail prevent-select">
                <p className="hero-heading">Providing Quality <br />Healthcare Services</p>
                <div className="details-block">
                    <div >
                    <p id="cover-detail">We offer a wide range of services including General Physician, Gynecologist, Pediatrician, Developmental Pediatrician, Occupational Therapy, Speech Therapy, Physiotherapy, VBT, Counseling and Psychological Assessment. </p>
                    <CustomButton className="overBtn" name="Contact Us" onClick={showModal}/>
                    </div>
                    <div className="socialMedia-icons">
                        <div className="horizontal-line"></div>
                        <img className="social-icons" src={gmail} alt="" srcset="" />
                        <img className="social-icons" src={facebook} alt="" srcset="" />
                        <img className="social-icons" src={instagram} alt="" srcset="" />
                        <div className="horizontal-line"></div>
                    </div>
                </div>
            </div>
         </div>

        {/* Services section */}
         <div className="services" id="services" >
            Our Services
            <div className="bundle">

            <Bundle />
            </div>
         </div>

        {/* Features section */}
         <div className="features" id="about">
            <div className="featuresContainer">
                <h1>Highlighted Features </h1>
                <p className="highlight-p">
                At Dr Carewell, we offer a wide range of services to cater to the various needs of children and their families. From general physician consultations to specialized developmental pediatrics, we have it all. 
                </p>
                <div className="featureImg">
                <img className="f1 img-style" src={f1img} alt="" srcset="" />
                <img className="f2 img-style" src={f2img} alt="" srcset="" />
                <img className="f3 img-style" src={f3img} alt="" srcset="" />
                <img className="f4 img-style" src={f4img} alt="" srcset="" />
                    

                </div>

                <h1 style={{color:"#936EFE"}}>Testimonial </h1>
                <p >
                Our team comprises highly experienced and skilled doctors and therapists who are passionate about delivering the best healthcare services for children. 
                </p>

                <div className="testimonial">
                    <div className="customer-box">
                        <div className="customer">
                            <img className="comma" src={comma} alt="" />
                        Dr. Carewell is the best hospital I have ever been to. The doctors and staff are highly professional and caring. In short a great place for healthcare.
                        <div style={{marginTop:"30px" ,borderTop:"2px solid #fff"}} />
                        <h4 style={{marginTop:"30px" }}>Sorabh</h4>
                        </div>
                        
                    </div>

                    <div className="customer-box">
                        <div className="customer">
                            <img className="comma" src={comma} alt="" />
                            Dr. Carewell has been a great help to me and my family. The doctors are knowledgeable and the staff is friendly and helpful.  
                            <div style={{marginTop:"30px" ,borderTop:"2px solid #fff"}} />
                            <h4 style={{marginTop:"30px" }}>Arpit</h4>
                        </div>
                        
                    </div>

                    <div className="customer-box">
                        <div className="customer">
                            <img className="comma" src={comma} alt="" />
                            I would highly recommend Dr. Carewell to anyone in need of medical assistance. The service is top-notch and the doctors are highly skilled.  
                            <div style={{marginTop:"30px" ,borderTop:"2px solid #fff"}} />
                            <h4 style={{marginTop:"30px"}}>Sarthakh</h4>
                        </div>
                    </div>
                </div>
                    <p style={{fontSize:"3rem" , fontWeight:"bold" ,marginBottom:"3vh"}}>Location  </p>
                <div className="map">
                <img className="hospital-img" src={hospital} alt="" srcset="" />
                <Map />
                </div>
            </div>
         </div>

         <div className="contact-Block">
            <div className="contact" id="contact">

            <h1> Book an Appointment Now </h1>
            <h3>Contact</h3>
            <div className="call-now-btn overBtn" onClick={showModal}> Call now</div>
            </div>
         </div>

         <Footer />

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
       </div>
            
    );
}

export default Coverpage;