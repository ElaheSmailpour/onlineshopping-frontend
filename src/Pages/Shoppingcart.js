import { useEffect, useState } from "react"
//import { useHistory } from "react-router-dom";
import ProductItemCategory from "../Pages/ProductItemCategory"
import { getcart } from "../api/productApi"
import React from 'react';
const Shoppingcart = () => {
    const [data, SetData] = useState([])
    /*
      const history = useHistory()
      useEffect(() => {
          let local = localStorage.getItem("token")
  
          if (!local) {
              history.push("/login")
          }
      }, [history])
      */
    useEffect(() => {
        getcart().then((res) => {
            SetData(res.data)
        }).catch(err => {
            console.log("error axios ProductDetails=", err)
            console.log(err)
        })
    }, [])
    return (
        <div className="Shoppingcart">
            <h1>Shoppingcart....</h1>
            <ul>
                {data.map((item, index) =>
                    <li key={index}>
                        <ProductItemCategory productimage={item.product.image}
                            productprice={item.product.price}
                            productid={item.product._id}
                            countporduct={item.count}
                        />
                    </li>
                )}

            </ul>

        </div>
    )
}

export default Shoppingcart