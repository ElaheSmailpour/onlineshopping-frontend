import "./styles/home.css"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {getmetApi} from "../api/userApi"
import React, {useEffect, useState} from 'react';
import CategoryIcon from '@material-ui/icons/Category';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Dialog} from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import "../Pages/styles/layoutNew.css" 
const LayoutNew = () => {
    const [cartcount, setCartcount] = useState("")
    const [countNote, setcountNote] = useState("")
    const [username, setUsername] = useState("")
    const [openAccountDialog, setOpenAccountDialog] = useState(false)


    useEffect(() => {
        if (localStorage.getItem("token"))
            getmetApi().then((res) => {
                const count = res.data.cart.reduce((acc, item) => acc + item.count, 0)
                const countaddNote = res.data.notes.length;
                const showUsername = res.data.name;
                setCartcount(count)
                setcountNote(countaddNote)
                setUsername(showUsername)
                console.log("getme=")
            }).catch((error) => {
                if (error.response.status === 401) {
                    localStorage.clear();
                    window.location.reload();
                }
                console.log("error with getmetApi", error)
            })
    }, [])
    const getaccountbtn = () => {
        let local = localStorage.getItem("token")
        if (local) {

            return <button onClick={() => {
                localStorage.clear();
                window.location.reload()
            }}> logout</button>

        }
        return <Link to="/login">login</Link>
    }
    const name = localStorage.getItem("name")
    const image = localStorage.getItem("image")
    //const imagegoogle=localStorage.getItem("imagegoogle")
    console.log("name=", name)
    //console.log("imagegoogle=",imagegoogle)
    console.log("image=", image)

    const onCloseDialog = () => {
        setOpenAccountDialog(false)
    }

    const logoutClick = () => {
        localStorage.clear()
        window.location.reload();
    }

    return (
        <header className={"myHeader"}>
             <h1 className="headerhome">Eli Shop</h1>

{name && <p>welcom:{name}</p>}

{image && <img className="loginImage" src={image} alt="foto" />}

            <nav>
                <ul>
                    <li onClick={() => setOpenAccountDialog(true)}>
                        <AccountBoxIcon/>
                        Account
                    </li>
                    <li>
                        <ShoppingCartIcon/>
                        <span className="spancart">
                                {cartcount  ? cartcount : "cart is Empty"}
                                </span>
                        <Link to={"/shoppingcart"}>Shopping Cart</Link>
                       
                    </li>
                    <li>
                        <CategoryIcon/>
                        <Link to={"/category"}>Category</Link>
                    </li>
                    <li>
                        <FavoriteIcon/>
                        <span className="spanNote">
                                    {countNote}
                                </span>
                        <Link to={"/note"}>Notes</Link>
                    </li>
                </ul>
            </nav>
            <Dialog classes={{paper: "paperDialog"}} open={openAccountDialog} onClose={onCloseDialog}>
                <ul>
                    <li className={"haveSubMenu"} >
                        <a  href={"javascript:void(0)"}>my account</a>
                        <div className={"submenu"}>
                            <ul>

                                <li><Link to={"/login"}>Login</Link></li>
                                 
                                <i className="fa fa-fw fa-user fa-2x">
                                <span className="usernamelogin">
                                    {username ? <i class="fas fa-check"></i> : "" }
                                </span>

                                </i>
                                {getaccountbtn()}

                                <li><Link to={"/signup"}>Sign up</Link></li>
                            </ul>
                        </div>
                        <ChevronRightIcon/>
                    </li>
                   
                    <li onClick={logoutClick}>
                        <a href={"javascript:void(0)"}>Logout</a>
                    </li>
                </ul>

                
            </Dialog>


            
        </header>
    )
}

export default LayoutNew