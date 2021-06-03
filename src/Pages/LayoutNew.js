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
    const [openCategoryDialog, setOpenCategoryDialog] = useState(false)
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

            return <button onClick={() => {
                localStorage.clear();
                window.location.reload()
            }}> logout</button>

        }
       
    }
   

    const onCloseDialog = () => {
        setOpenAccountDialog(false)
    }

    
    const onCloseCategoryDialog = () => {
        setOpenCategoryDialog(false)
    }

    const logoutClick = () => {
        localStorage.clear()
        window.location.reload();
    }
    const name = localStorage.getItem("name")
    return (
        <header className={"myHeader"}>
             <h1 className="headerhome">Eli Shop</h1>

{name && <p>welcom:{name}</p>}


    {userImage && <img className="loginImage" src={userImage} alt="foto" />}
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
                    <li   onClick={() => setOpenCategoryDialog(true)}>
                        <CategoryIcon/>
                      
                       Category
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
            <Dialog classes={{paper: "paperDialog"}} open={openCategoryDialog} onClose={onCloseCategoryDialog}>
                <ul>
                    <li className={"haveSubMenu"} >
                        <span>Category</span>
                        <div className={"submenu"}>
                            <ul>

                                <li><Link to={"/ProductListCategory/60a4a61e318a3c21e32494a8"}>Bag</Link></li>
                                 
        
                                <li><Link to={"/ProductListCategory/60994aca5c079d1905146394"}>Accesories</Link></li>
                            </ul>
                        </div>
                        <ChevronRightIcon/>
                    </li>
                   
                    
                </ul>

                
            </Dialog>

            <Dialog classes={{paper: "paperDialog"}} open={openAccountDialog} onClose={onCloseDialog}>
                <ul>
                    <li className={"haveSubMenu"} >
                    <span>my account</span>
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
                    <span>Logout</span>
                    </li>
                </ul>

                
            </Dialog>

            
        </header>
    )
}

export default LayoutNew