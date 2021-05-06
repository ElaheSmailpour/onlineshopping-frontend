import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className="Home">
            <h1>Eli Shop</h1>
            <Link to="/login">Login</Link>
            <Link to="/product">Product</Link>
            <Link to="/shoppingcart">shopping cart</Link>	
            <Link to="/note">Note</Link>
            <Link to="/service">Sevice</Link>
          
        </div>
    )
}

export default Home