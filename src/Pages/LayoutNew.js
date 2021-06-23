import "./styles/home.css"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { getmetApi } from "../api/userApi"
import React, { useEffect, useState } from 'react';
import CategoryIcon from '@material-ui/icons/Category';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { Dialog } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import "../Pages/styles/layoutNew.css"
import { serachProductApi } from "../api/productApi"
import { useTranslation } from 'react-i18next'
import LanguageIcon from '@material-ui/icons/Language';

const LayoutNew = () => {
    const [cartcount, setCartcount] = useState("")
    const [countNote, setcountNote] = useState("")
    const [username, setUsername] = useState("")
    const [openAccountDialog, setOpenAccountDialog] = useState(false)
    const [openCategoryDialog, setOpenCategoryDialog] = useState(false)
    const [userImage, setUserImage] = useState("")
    const [searchProduct, setSearchProduct] = useState("")
    const [productlist, setProductList] = useState([])
    const [loading, setLoading] = useState(true)

    const { t } = useTranslation()
    useEffect(() => {
        getmeDate()
        setInterval(getmeDate, 5000)
    }, [])

    const getmeDate = () => {
        if (localStorage.getItem("token"))
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

                if (error.response && error.response.status === 401) {
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

    const handleOpenCategory = (e) => {
        setOpenCategoryDialog(true);
        console.log(e)
    }

    const logoutClick = () => {
        localStorage.clear()
        window.location.reload();
    }
    const name = localStorage.getItem("name")

    const searchlogo = () => {
        if (searchProduct === "") {
            setProductList([])
        }
        else {
            serachProductApi(searchProduct).then((res) => {
                setProductList(res.data)
                setLoading(false)

            }).catch((error) => {
                console.log("error with serachProduct", error)
            })
        }
    }
    const searchkeyup = (event) => {
        console.log(event.key)
        if (event.key === "Enter") {
            searchlogo()

        }
    }

    const showsearch = () => {
        setSearchProduct("")
        setProductList([])

    }
    const getSearch = (event) => {

        const eventInput = event.target.value;
        setSearchProduct(eventInput)


    }
    return (
        <header className="myHeader">
            <h1 className="headerhome">Eli Shop</h1>

            {name && <p className="nameUser">Hi: {name}</p>}
            <div className="searchProduct">
                <button onClick={searchlogo}><i className="fa fa-fw fa-search fa-5"></i></button>
                <input className="formSearchProduct" type="text" placeholder="Search" value={searchProduct} onChange={getSearch} onKeyUp={searchkeyup} />
            </div>
            <nav>
                <ul>
                    <li>


                        <Link to={"/newProduct"}>NewProduct</Link>
                    </li>
                    <li>

                        <Link to={"/language"}>   <LanguageIcon /></Link>
                    </li>

                    <li onClick={() => setOpenAccountDialog(true)}>
                        <AccountBoxIcon />
                        {t('Account.label')}

                    </li>

                    <li>

                        <span className="spanNote">
                            {countNote}
                        </span>
                        <Link to={"/note"}><FavoriteIcon /></Link>

                    </li>
                    <li>

                        <span className="spancart">
                            {cartcount}
                        </span>
                        <Link to={"/shoppingcart"}><ShoppingCartIcon /></Link>

                    </li>
                    <li onClick={(e) => handleOpenCategory(e)}>
                        <CategoryIcon />

                        Category
                    </li>

                    <li>


                        <Link to={"/contact"}> <ContactPhoneIcon />Contact</Link>
                    </li>


                </ul>
            </nav>
            {userImage && <img className="navbar_image" src={userImage} alt="foto" />}

            <Dialog classes={{ paper: "paperDialog paperDialogCat" }} open={openCategoryDialog} onClose={onCloseCategoryDialog}>
                <ul>
                    <li className={"haveSubMenu"}>
                        <span>Category</span>
                        <div className={"submenu"}>
                            <ul>

                                <li><Link to={"/ProductListCategory/60a4a61e318a3c21e32494a8"}>Bag</Link></li>


                                <li><Link to={"/ProductListCategory/60994aca5c079d1905146394"}>Accesories</Link></li>
                            </ul>
                        </div>
                        <ChevronRightIcon />
                    </li>


                </ul>


            </Dialog>

            <Dialog classes={{ paper: "paperDialog" }} open={openAccountDialog} onClose={onCloseDialog}>
                <ul className="ulposition">
                    <li className={"haveSubMenu"}>
                        <span>my account</span>
                        <div className={"submenu"}>
                            <ul>

                                <li><Link to={"/login"}>Login</Link></li>

                                <i className="fa fa-fw fa-user fa-2x">
                                    <span className="usernamelogin">
                                        {username ? <i class="fas fa-check"></i> : ""}
                                    </span>

                                </i>
                                {getaccountbtn()}

                                <li><Link to={"/signup"}>Sign up</Link></li>
                                <li><Link to={"/changeProfile"}>Change Profile</Link></li>
                            </ul>
                        </div>
                        <ChevronRightIcon />
                    </li>

                    <li onClick={logoutClick}>
                        <span>Logout</span>
                    </li>
                </ul>


            </Dialog>
            <div className="searchbox">
                {productlist.length === 0 && searchProduct && !loading && <p>Not Found</p>}
                <ul>
                    {productlist.map((item, index) => {
                        return <li key={index} onClick={showsearch}><Link to={`/productdetails/${item._id}`}> {item.name}</Link>
                        </li>
                    })}
                </ul>
            </div>


        </header>
    )
}

export default LayoutNew