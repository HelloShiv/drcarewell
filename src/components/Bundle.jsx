import SingleCard from "./SingleCard";
import  "../styles/services.css";
import counselling from "../images/services/Counselling.jpeg";
import Development from "../images/services/Development Pediatrics.jpg";
import generalPhysician from "../images/services/General-Physician.jpg";
import gynecology from "../images/services/Gynecology.jpg";
import Occupational from "../images/services/Occupational Therapy.jpg";
import Pediatrician from "../images/services/pediatrician-220b.jpg";
import Physiotherapy from "../images/services/Physiotherapy.png";
import Psychological from "../images/services/Psychological Assessment.jpeg";
import Speech from "../images/services/Speech Therapy.jpg";
import VBT from "../images/services/VBT.jpg";

function Bundle(){
    return(
        <div className="card-grid">
        <SingleCard src={counselling} alt="counselling" title="Counselling" />
        <SingleCard src={Development} alt="Development Pediatrician" title="Development Pediatrician" />
        <SingleCard src={generalPhysician} alt="General Physician" title="General Physician" />
        <SingleCard src={gynecology} alt="gynecology" title="Gynecology" />
        <SingleCard src={Occupational} alt="Occupational Therapy" title="Occupational Therapy" />
        <SingleCard src={Pediatrician} alt="Pediatrician" title="Pediatrician" />
        <SingleCard src={Physiotherapy} alt="Physiotherapy" title="Physiotherapy" />
        <SingleCard src={Psychological} alt="Psychological Assessment" title="Psychological Assessment" />
        <SingleCard src={Speech} alt="Speech Therapy" title="Speech Therapy" />
        <SingleCard src={VBT} alt="VBT" title="VBT" />

        </div>
    );
}

export default Bundle;