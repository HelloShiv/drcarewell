import location from "../styles/location.css"
function Map(){
    return (
        <div className="location">
            <div className= "address-text">
                <div>

                    <span className="title-address" >Address <br/><br/></span>
                    2, Trunk Rd, Swaminatha Nagar, Pushpa Nagar, Kattupakkam, Chennai, Tamil Nadu 600056
            </div>
                </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124381.27143171428!2d80.1273714!3d13.041099299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261ed6916ba69%3A0xe8dd881846199a8a!2sDR%20CAREWELL%20BABY%20AND%20MOM&#39;S%20CLINIC!5e0!3m2!1sen!2sin!4v1697015792202!5m2!1sen!2sin&z=200" style={{width:"35vw" , height:"30vh" , loading:"lazyLoading" , borderRadius:"20px" ,marginBottom:"3vw" ,minWidth:"200px" ,maxWidth:"600px"}}></iframe>
        </div>
    );
}

export default Map;


