import Navbar from "./Navbar";
import Bundle from "./Bundle"
import Button from "./Button.jsx";
import Footer from "./footer.jsx";
import "../styles/herosection.css"
import "../styles/services.css";
import "../styles/features.css";
import "../styles/contact.css"

import cover from "../images/cover.jpg"
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import gmail from "../images/gmail.png";
import f1img from "../images/f1.jpg";
import f2img from "../images/f2.jpg";
import f3img from "../images/f3.jpg";
import f4img from "../images/f4.jpg";
import comma from "../images/comma.png";


function Coverpage(){

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
                    <Button name="Contact Us"/>
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

                <h1 style={{color:"#936EFE"}}>Expert Team of Specialists </h1>
                <p >
                Our team comprises highly experienced and skilled doctors and therapists who are passionate about delivering the best healthcare services for children. 
                </p>

                <div className="testimonial">
                    <div className="customer-box">
                        <div className="customer">
                            <img src={comma} alt="" style={{height:"80px" ,marginLeft:"2vh",display:"block" ,marginLeft:"0"}}/>
                        Dr. Carewell is the best hospital I have ever been to. The doctors and staff are highly professional and caring. Doctors are highly trained and their behaviour is also very welcoming.
                        <div style={{marginTop:"30px" ,borderTop:"2px solid #fff"}} />
                        <h4 style={{marginTop:"30px" }}>Sorabh</h4>
                        </div>
                        
                    </div>

                    <div className="customer-box">
                        <div className="customer">
                            <img src={comma} alt="" style={{height:"80px" ,marginLeft:"2vh",display:"block" ,marginLeft:"0"}}/>
                            Dr. Carewell has been a great help to me and my family. The doctors are knowledgeable and the staff is friendly and helpful.  
                            <div style={{marginTop:"30px" ,borderTop:"2px solid #fff"}} />
                            <h4 style={{marginTop:"30px" }}>Arpit</h4>
                        </div>
                        
                    </div>

                    <div className="customer-box">
                        <div className="customer">
                            <img src={comma} alt="" style={{height:"80px" ,marginLeft:"2vh",display:"block" ,marginLeft:"0"}}/>
                            I would highly recommend Dr. Carewell to anyone in need of medical assistance. The service is top-notch and the doctors are highly skilled.  
                            <div style={{marginTop:"30px" ,borderTop:"2px solid #fff"}} />
                            <h4 style={{marginTop:"30px"}}>Sarthakh</h4>
                        </div>
                    </div>
                </div>
            </div>
         </div>

         <div className="contact-Block">
            <div className="contact" id="contact">

            <h1> Book an Appointment Now </h1>
            <h3>Contact</h3>
            <div className="call-now-btn"> Call now</div>
            </div>
         </div>

         <Footer />

       </div>
    );
}

export default Coverpage;