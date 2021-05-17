import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom"

import bag2 from '../Pages/images/bag2.jpeg'
import bag3 from '../Pages/images/bag3.jpeg'
import bag4 from '../Pages/images/bag4.jpeg'
import bracelet1 from '../Pages/images/bracelet1.jpeg'
import bracelet4 from '../Pages/images/bracelet4.jpeg'
import menshirts5 from '../Pages/images/menshirts5.jpeg'
import childeren3 from '../Pages/images/childeren3.jpeg'
import childeren4 from '../Pages/images/childeren4.jpeg'
import "./styles/home.css"
const Home = () => {


    const getaccountbtn = () => {
        let local = localStorage.getItem("token")
        if (local) {
            return <button onClick={() => { localStorage.clear(); window.location.reload() }}> logout</button>

        }
        return <Link to="/login">login</Link>
    }
    const name=localStorage.getItem("name")
    const image=localStorage.getItem("image")
    const image1=localStorage.getItem("imagemulter")
    
    console.log(name,image)
    return (
        <div className="home">
            <h1 className="headerhome">Eli Shop</h1>
           {name && <p>welcom:{name}</p>}
           {image1 &&  <img src={image1} alt="foto"/>}
           {image &&  <img src={image} alt="foto"/>}
            <button className="btn btn-outline-success">  <i className="fa fa-fw fa-search fa-5"></i>
                <input className="form-control" type="text" placeholder="Search" />
            </button>
            <div className="navbarhome">
                <nav className="navbar navbar-expand-lg navbar-light  bg-light">

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">

                                <i className="fa fa-fw fa-user fa-2x"></i>
                                {getaccountbtn()}
                            </li>
                            <li className="nav-item active">
                                <Link to="/product">Product</Link>
                            </li>
                            <li className="nav-item active">
                                <i className="fas fa-shopping-cart fa-2x"></i>
                                <Link to="/shoppingcart">cart</Link>

                            </li>
                            <li className="nav-item active">
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
             
                <img src={bag2} alt="foto" />
                <img src={bag3} alt="foto" />
                <img src={bag4} alt="foto" />
                <img src={bracelet1} alt="foto" />
                <img src={bracelet4} alt="foto" />
                <img src={menshirts5} alt="foto" />
                <img src={childeren3} alt="foto" />
                <img src={childeren4} alt="foto" />
                
            </div>
        </div>
    )
}

export default Home