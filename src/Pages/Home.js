import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom"
import React from 'react';
import bag2 from "../Pages/images/bag2.jpeg"
import bracelet5 from "../Pages/images/bracelet5.jpeg"
import { Button, Card } from "react-bootstrap"
import { getmetApi } from "../api/userApi"
import { useEffect, useState } from 'react';
import "./styles/home.css"
const Home = () => {
    const [cartcount, setCartcount] = useState("")
    const [countNote, setcountNote] = useState("")
    const [username, setUsername] = useState("")
    useEffect(() => {
        getmetApi().then((res) => {

            const count = res.data.cart.reduce((acc, item) => acc + item.count, 0)
            const countaddNote = res.data.notes.length;
            const showUsername = res.data.name;
            setCartcount(count)
            setcountNote(countaddNote)
            setUsername(showUsername)
            console.log("getme=")
        }).catch((error) => {
            console.log("error with getmetApi", error)
        })
    }, [])
    const getaccountbtn = () => {
        let local = localStorage.getItem("token")
        if (local) {

            return <button onClick={() => { localStorage.clear(); window.location.reload() }}> logout</button>

        }
        return <Link to="/login">login</Link>
    }
    const name = localStorage.getItem("name")
    const image = localStorage.getItem("image")
    //const imagegoogle=localStorage.getItem("imagegoogle")
    console.log("name=", name)
    //console.log("imagegoogle=",imagegoogle)
    console.log("image=", image)

    return (
        <div className="home">

            <h1 className="headerhome">Eli Shop</h1>

            {name && <p>welcom:{name}</p>}

            {image && <img src={image} alt="foto" />}

            <div className="navbarhome">
                <nav className="navbar navbar-expand-lg navbar-light  bg-light">

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                
                                <i className="fa fa-fw fa-user fa-2x">
                                <span className="usernamelogin">
                                    {username ? <i class="fas fa-check"></i> : "" }
                                </span>

                                </i>
                                {getaccountbtn()}
                            </li>
                            <li className="nav-item active">
                                <Link to="/product">Product</Link>
                            </li>

                            <li className="nav-item active">
                                <span className="spancart">
                                {cartcount  ? cartcount : "cart is Empty"}
                                </span>
                                <i className="fas fa-shopping-cart fa-2x"></i>

                                <Link to="/shoppingcart">shoppingcart</Link>

                            </li>
                            <li className="nav-item active">
                                <span className="spanNote">
                                    {countNote}
                                </span>
                                <i className="far fa-heart fa-2x"></i>
                                <Link to="/note">Note</Link>
                            </li>
                            <li className="nav-item active">
                                <i className="far fa-id-card fa-2x"></i>
                                <Link to="/Contact">Contact</Link>
                            </li>
                            <li className="nav-item active">
                                <i className="far fa-list-alt fa-2x"></i>
                                <Link to="/category">Category</Link>
                            </li>

                            <li className="nav-item active">
                                <i className="fas fa-plus-circle fa-2x"></i>
                                <Link to="/NewProduct">NewProduct</Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
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