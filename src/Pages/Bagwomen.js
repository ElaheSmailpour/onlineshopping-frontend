import "../Pages/styles/bagwomen.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useState } from 'react';
import { getselectproduct } from "../api/productApi";
import Bagwomenlist from "../Pages/Bagwomenlist"
//import bag1 from "../Pages/images/bag1.jpg"
import React from "react"

const Bagwomen = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getselectproduct().then(response => {
            setProducts(response.data);
            console.log("responsebag=",response.data)
        }).catch(err => {
            console.log("error axios bagwomen=",err)
        })
    }, [])
    
    
    return (
        <div className="Bagwomencontainer">
            <div className="Bagwomenimage">
                <img src={""} alt="foto" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h1 className="card-title">titel:</h1>
                <p className="card-text text-secondary"> </p>
            </div>

            <label for="selectbagwomen">conut:</label>
            <select className="selectbagwomen">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>

            <br></br>
            <ul>
                {products.map((item, index) => 
                <li key={index}>
           <Bagwomenlist productName={item.name}/>
                 </li>
                )}
               
            </ul>
            <button><i className="fas fa-shopping-cart fa-2x"></i>Go to cart</button>
            <button><i className="far fa-heart fa-2x"></i>Go to Note</button>

        </div>
    )
}

export default Bagwomen
