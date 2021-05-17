import {Link} from "react-router-dom"
import Googlemap from '../Pages/Googlemap'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./styles/contact.css"
import menshirts2 from "../Pages/images/menshirts2.jpeg"
import menshirts4 from "../Pages/images/menshirts4.jpeg"
import bag8 from "../Pages/images/bag8.jpeg"
import bracelet3 from "../Pages/images/bracelet3.jpeg"
const Contact = () => {

    return (
        <div className="contact">
            <h1 className="headercontact">Contact uns!</h1>
            <div className="contactform">
                <p className="text">Are you a customer, seller, service provider or interested in working with Eli Shop? Please select the appropriate request and contact us by email. We look forward to your message!!</p>
                <div className="pictures">

                    <img src={menshirts2} alt="foto" />
                    <img src={menshirts4} alt="foto" />
                    <img src={bag8} alt="foto" />
                    <img src={bracelet3} alt="foto" />
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
<Googlemap/>
        </div>

    )
}

export default Contact