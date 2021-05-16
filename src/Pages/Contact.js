import {Link} from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./styles/contact.css"
import clothes6 from "../Pages/images/clothes6.jpeg"
import clothes2 from "../Pages/images/clothes2.jpeg"
import clothes4 from "../Pages/images/clothes4.jpeg"
import clothes5 from "../Pages/images/clothes5.jpeg"
const Contact = () => {

    return (
        <div className="contact">
            <h1 className="headercontact">Contact uns!</h1>
            <div className="contactform">
                <p className="text">Are you a customer, seller, service provider or interested in working with Eli Shop? Please select the appropriate request and contact us by email. We look forward to your message!!</p>
                <div className="pictures">

                    <img src={clothes2} alt="foto" />
                    <img src={clothes5} alt="foto" />
                    <img src={clothes6} alt="foto" />
                    <img src={clothes4} alt="foto" />
                </div>
                <div className="footercontact">
                <footer>
                    <p>Author: Elahe Smailpour</p>
                    <p>Address: Golzheimer Strasse Düsseldorf 130</p>
                    <p>Telefon:0176176666</p>
                    <p>contact us via:
  <a href="mailto:hege@example.com">eli_es87@yahoo.com</a>
                        <br></br>
                        <a href="https://www.instagram.com/"><i class="fab fa-instagram-square fa-2x"></i></a>
                        <a href="https://mail.yahoo.com/?.lang=de-DE"><i class="fas fa-envelope-square fa-2x"></i></a>
                        <a href="http://linkedin.com"><i class="fab fa-linkedin fa-2x"></i></a>
                    </p>
                </footer>
                </div>
              <p className="backtohome"><Link to="/"><i class="fa fa-home">Home</i></Link></p> 
            </div>
        </div>

    )
}

export default Contact