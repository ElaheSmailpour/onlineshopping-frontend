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
            console.log("responsebag=", response.data)
        }).catch(err => {
            console.log("error axios bagwomen=", err)
            console.log(err)
        })
    }, [])

    return (
        <div className="Bagwomencontainer">
             
            <ul>
                {products.map((item, index) =>
                    <li key={index}>
                        <Bagwomenlist productimage={item.image}
                            productprice={item.price}

                        />
                    </li>
                )}

            </ul>
           
        </div>
    )
}

export default Bagwomen
