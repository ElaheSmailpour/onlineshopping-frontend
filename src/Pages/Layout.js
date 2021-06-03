import "./styles/home.css"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { getmetApi } from "../api/userApi"
import React from 'react';
import { useEffect, useState } from 'react';
const Layout=()=>{
    const [cartcount, setCartcount] = useState("")
    const [countNote, setcountNote] = useState("")
    const [username, setUsername] = useState("")
    const [userImage, setUserImage] = useState("")
    useEffect(() => {
        getmeDate()
        setInterval(getmeDate,5000)
    }, [])

    const getmeDate=()=>{
        if(localStorage.getItem("token"))
        getmetApi().then((res) => {
            const count = res.data.cart.reduce((acc, item) => acc + item.count, 0)
            const countaddNote = res.data.notes.length;
            const showUsername = res.data.name;
            setCartcount(count)
            setcountNote(countaddNote)
            setUsername(showUsername)
            setUserImage(res.data.image)
            console.log("getme=")
        }).catch((error) => {

            if (error.response && error.response.status===401){
                localStorage.clear();
                window.location.reload();
            }
            console.log("error with getmetApi", error)
        })
    }
    const getaccountbtn = () => {
        let local = localStorage.getItem("token")
        if (local) {

            return <button onClick={() => { localStorage.clear(); window.location.reload() }}> logout</button>

        }
        return <Link to="/login">login</Link>
    }
    const name = localStorage.getItem("name")
   
    return(
        
        <div className="Layout">
 <h1 className="headerhome">Eli Shop</h1>

{name && <p>welcom:{name}</p>}

{userImage && <img className="loginImage" src={userImage} alt="foto" />}

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
                            <li className="nav-item active">
                                <i className="fas fa-plus-circle fa-2x"></i>
                                <Link to="/changeProfile">changeProfile</Link>
                            </li>
                          
                        </ul>
                    </div>
                </nav>
</div>
        </div>
    )
}

export default Layout