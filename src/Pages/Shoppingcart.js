import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getcart } from "../api/productApi"
import { useHistory } from "react-router-dom"
import { removeseletcount } from "../api/productApi"
import { addcartpost } from "../api/productApi"
import "../Pages/styles/shopingcart.css"
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
        updatedata()
    }, [])
    const updatedata = () => {
        getcart().then((res) => {
            SetData(res.data)
        }).catch(err => {
            console.log("error axios ProductDetails=", err)
            console.log(err)
        })
    }
    const removeItem = (productid) => {
        removeseletcount(productid).then((res) => {
            updatedata()
        }).catch(err => {
            console.log("error axios ProductListCategory=", err)
            console.log(err)
        })
    }

    const onchangeselect = (event,productid) => {
        const countcart = event.target.value;
        addcartpost(productid, countcart).then((res) => {
            updatedata()
        }).catch((error) => {
            console.log(error)
        })

    }
    const history=useHistory()
    const payOrder=()=>{
history.push("/pay")
    }
    return (
        <div className="Shoppingcart">
            <h1 className="headerCart">Shoppingcart....</h1>
            <p className="backtohomeNote"><Link to="/"><i class="fa fa-home fa-2x">Home</i></Link></p>
        
            <table>
                <thead>
                    <tr>
                        <th>EliShop</th>
                        <th>Details</th>
                        <th>Count</th>
                        <th>Total Price</th>
                        <th>Remove</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        console.log(index, item)
                        return <tr key={index}>
                            <td><img  className="imgCart" src={item.product.image} alt="foto" /></td>
                            <td>{item.product.name}</td>
                            <td>
                                <select value={item.count} onChange={(e) => onchangeselect(e,item.product._id)}>
                                    {"+".repeat(100).split("").map((item, index) => <option value={index + 1}>{index + 1}</option>)}

                                </select>
                            </td>
                            <td>{item.count * item.product.price}</td>
                            <td onClick={() => removeItem(item.product._id)}>[X]</td>
                        </tr>
                    }

                    )}
                </tbody>
               
            </table>
<div className="paytotal">
            <p>Total:
            {data.reduce((sum,item)=>sum+(item.count*item.product.price),0) }
            </p>
            <button onClick={payOrder} className="pay">Pay</button>
            </div>
        </div>
    )
}

export default Shoppingcart