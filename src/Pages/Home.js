import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom"
import "./styles/home.css"
const Home = () => {



    return (
        <div className="Home">
            <h1>Eli Shop</h1>
            <div className="navbar">
                <nav className="navbar navbar-expand-lg navbar-light  bg-light">

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">

                                <i className="fa fa-fw fa-user fa-2x"></i>
                                <Link to="/login">login</Link>
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
                            <input className="form-control" type="text" placeholder="Search" />

                            <button className="btn btn-outline-success">  <i className="fa fa-fw fa-search fa-5"></i> </button>

                        </ul>

                    </div>
                </nav>

            </div>


        </div>
    )
}

export default Home