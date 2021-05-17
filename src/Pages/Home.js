import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom"
import clothes8 from '../Pages/images/clothes8.jpeg'
import clothes10 from '../Pages/images/clothes10.jpeg'
import clothes9 from '../Pages/images/clothes9.jpeg'
import clothes7 from '../Pages/images/clothes7.jpeg'
import suitgirl2 from '../Pages/images/suitgirl2.jpeg'
import suitgirl3 from '../Pages/images/suitgirl3.jpeg'
import suitgirl6 from '../Pages/images/suitgirl6.jpeg'
import suitgirl7 from '../Pages/images/suitgirl7.jpeg'
import suitgirl9 from '../Pages/images/suitgirl9.jpeg'
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
    console.log(name,image)
    return (
        <div className="home">
            <h1 className="headerhome">Eli Shop</h1>
           {name && <p>welcom:{name}</p>}
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
                <img src={clothes8} alt="foto" />
                <img src={clothes9} alt="foto" />
                <img src={clothes7} alt="foto" />
                <img src={clothes10} alt="foto" />
                <img src={suitgirl3} alt="foto" />
                <img src={suitgirl2} alt="foto" />
                <img src={suitgirl6} alt="foto" />
                <img src={suitgirl7} alt="foto" />
                <img src={suitgirl9} alt="foto" />
                
            </div>
        </div>
    )
}

export default Home