import "../Pages/styles/bagwomen.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react"

const Bagwomen = () => {
    return (
        <div className="Bagwomencontainer">
         
            <div className="Bagwomenimage">
                <img src={""} alt="foto" className="card-img-top" />
            
            </div>
            <div className="card-body text-dark">
                <h1 className="card-title">titel:</h1>
                <p className="card-text text-secondary"> joop handle bag, in a simple look with practical division</p>
            </div>
            <button><i className="fas fa-shopping-cart fa-2x"></i>Go to cart</button>
            <button><i className="far fa-heart fa-2x"></i>Go to Note</button>
        </div>
    )
}

export default Bagwomen
