
import React from 'react';
import shop1 from "../Pages/images/shop1.jpeg"
import "./styles/home.css"
const Home = () => {
   
    return (
        <div className="home">

           
            <div className="imagehome">
              
            <img  className="shopImage" src={shop1}  alt="foto"/>
           
            </div>
        </div>
    )
}

export default Home