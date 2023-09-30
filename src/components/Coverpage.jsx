import Navbar from "./Navbar";
import "../styles/coverpage.css"
import cover from "../images/cover.jpg"
import Button from "./Button.jsx";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import gmail from "../images/gmail.png"
function Coverpage(){

    return(
       <div>

        <div className="herosection">

            <div className="image-with-gradient" style={{ backgroundImage: `url(${cover})` }}>
            <div className="gradient-overlay"></div> 

             <Navbar />
            </div>
            <div className="herosection-detail prevent-select">
                <p>Providing<br/>Quality <br />Healthcare Services</p>
                <div className="details-block">
                    <div >
                    <p id="cover-detail">We offer a wide range of services including General Physician, Gynecologist, Pediatrician, Developmental Pediatrician, Occupational Therapy, Speech Therapy, Physiotherapy, VBT, Counseling and Psychological Assessment. </p>
                    <Button name="Contact Us"/>
                    </div>
                    <div className="socialMedia-icons">
                        <div className="horizontal-line"></div>
                        <img src={gmail} alt="" srcset="" />
                        <img src={facebook} alt="" srcset="" />
                        <img src={instagram} alt="" srcset="" />
                        <div className="horizontal-line"></div>
                    </div>
                </div>
            </div>
  
         </div>

       </div>
    );
}

export default Coverpage;