import React, { useState } from "react"
import "../Pages/styles/productitemcart.css"
import { addcartpost } from "../api/productApi"
import { Link } from "react-router-dom"
import {removeseletcount} from "../api/productApi"
const ProductItemCart = ({ productprice, productimage, productid,updatedata, countporduct }) => {
    const [seletctoption, setSelectoption] = useState(countporduct)

    const onchangeselect = (event) => {
        const countcart = event.target.value;
        addcartpost(productid, countcart).then((res) => {
            setSelectoption(countcart)
        }).catch((error) => {
            console.log(error)
        })

    }
    const removeselectcount=()=>{
        removeseletcount(productid).then((res) => {
            updatedata()
        }).catch(err => {
            console.log("error axios ProductListCategory=", err)
            console.log(err)
        })
    }
   
    return (

        <div className="ProductItemCart">

            <div className="ProductItemCartcontainer">

                <Link to={`/productdetails/${productid}`} className="ProductItemCartimage">
                    <img className="ProductItemCartimage" src={productimage} alt="Foto" />
                </Link>

                <div className="ProductItemCartText">
                    <select value={seletctoption} onChange={(e) => onchangeselect(e)}>
                        {"+".repeat(100).split("").map((item, index) => <option value={index + 1}>{index + 1}</option>)}

                    </select>
                    <p className="price">price:{productprice}</p>
                </div>
                <button onClick={removeselectcount}>[X]</button>
                <p className="totalPrice">Total Price:</p>

            </div>

        </div>


    );
};

export default ProductItemCart;