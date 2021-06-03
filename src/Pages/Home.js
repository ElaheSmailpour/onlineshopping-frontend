
import React from 'react';
import shop from "../Pages/images/shop.jpeg"
import "./styles/home.css"
const Home = () => {
   
    return (
        <div className="home">

           
            <div className="imagehome">
              
            <img  className="shopImage" src={shop}  alt="foto"/>
           
            </div>
        </div>
    )
}

export default Home