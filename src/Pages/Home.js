import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom"
import React from 'react';
import bag2 from "../Pages/images/bag2.jpeg"
import bracelet5 from "../Pages/images/bracelet5.jpeg"
import { Button, Card } from "react-bootstrap"

import "./styles/home.css"
const Home = () => {
   
    return (
        <div className="home">

           
            <div className="imagehome">
                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Title>Bag</Card.Title>
                        <Card.Img variant="top" src={bag2} />
                        <Link to="/ProductListCategory/60a4a61e318a3c21e32494a8"><Button variant="primary">Go Bag</Button></Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>

                    <Card.Body>
                        <Card.Title>bracelet5</Card.Title>
                        <Card.Img variant="top" src={bracelet5} />
                        <Link to="/ProductListCategory/60994aca5c079d1905146394"><Button variant="primary">Go  Jwerlery</Button></Link>
                    </Card.Body>
                </Card>

            </div>
        </div>
    )
}

export default Home