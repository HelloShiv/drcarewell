import "../styles/footer.css";
import facebook from "../images/facebook.png";
import insta from "../images/instagram.png";
import gmail from "../images/gmail.png";

function footer(){
    const currentYear = new Date().getFullYear();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const emailLink = isMobile ? "mailto:drcarewell@gmail.com" : "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=drcarewell@gmail.com";


    return(<>
        <div className="footerContainer">
            <div className="container1 cont">
                <h2>Dr. Carewell</h2>
                <h2>
                    Providing Quality 
                    Healthcare Services
                </h2>
                <ul>
                <li>Call Now</li>
                </ul>
            </div>

            <div className="container2 cont">
                <h2>Services</h2>
                <ul>
                    <li>General Physician</li>
                    <li>Pediatrician</li>
                    <li>Gynecologist</li>
                </ul>
            </div>

            <div className="container3 cont">
                <h2>Counseling and Psychological Assessment</h2>
                <ul>
                    <li>ASD</li>
                    <li>Develelopmental Delay,ADHD,LD and Slow Learner</li>
                    <li>SPD</li>
                    <li>Speech Language Delay</li>
                </ul>
            </div>

            <div className="container4 cont">
                <h2>Occupational Therapy</h2>
                <ul>
                    <li>Speech Therapy</li>
                    <li>About</li>
                    <li>Physiotherapy</li>
                </ul>
            </div>

            <div className="container5 cont">
                <h2>Contact us</h2>
                <ul>
                    <li>+916381601020</li>
                    <li>About</li>
                    <li>
                        <img className="social-icons" src={facebook} alt="facebook icon" />
                        <a href={emailLink} target="_top">
                        <img className="social-icons" src={gmail} alt="gmail icon" />
                        </a>
                        <img className="social-icons" src={insta} alt="instagram icon" />
                    </li>
                </ul>
            </div>
        </div>
        <div className="copyright" >
        © {currentYear} Dr. Carewell, we care for your well-being! 
        </div>
        </>
    );
}

export default footer;
