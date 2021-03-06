import { Link } from "react-router-dom"
import Googlemap from '../Pages/Googlemap'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./styles/contact.css"
import React from 'react';
import menshirts2 from "../Pages/images/menshirts2.jpeg"
import menshirts4 from "../Pages/images/menshirts4.jpeg"
import bag8 from "../Pages/images/bag8.jpeg"
import bracelet3 from "../Pages/images/bracelet3.jpeg"
import { Card } from "react-bootstrap"

const Contact = () => {

    return (
        <div className="contact">
            <Card className="text-center">
                <Card.Header className="headercontact">Contact uns!</Card.Header>
                <Card.Body>

                    <Card.Text>
                        Are you a customer, seller, service provider or interested in working with Eli Shop? Please select the appropriate request and contact us by email. We look forward to your message!!
    </Card.Text>
                    <Card.Img className="picturesimg" variant="top" src={menshirts4} />
                    <Card.Img className="picturesimg" variant="top" src={bag8} />

                    <Card.Img variant="top" className="picturesimg" src={menshirts2} />
                    <Card.Img variant="top" className="picturesimg" src={bracelet3} />
                </Card.Body>
                <Card.Footer className="text-muted footercontact">
                    <p>Author: Elahe Smailpour</p>
                    <p>Address: Golzheimer Strasse Düsseldorf 130</p>
                    <p>Telefon:0176176666</p>
                    <p>contact us via:
  <a href="mailto:hege@example.com">eli_es87@yahoo.com</a>
                        <a href="https://www.instagram.com/"><i class="fab fa-instagram-square fa-2x"></i></a>
                        <a href="https://mail.yahoo.com/?.lang=de-DE"><i class="fas fa-envelope-square fa-2x"></i></a>
                        <a href="http://linkedin.com"><i class="fab fa-linkedin fa-2x"></i></a>
                    </p>

                </Card.Footer>
                <p className="backtohome"><Link to="/"><i class="fa fa-home fa-2x">Home</i></Link></p>
            </Card>

            <Googlemap />
        </div>

    )
}

export default Contact