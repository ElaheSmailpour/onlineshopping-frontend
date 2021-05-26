import React from "react"
import { createnote } from "../api/productApi"
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import { getproductdetails } from "../api/productApi"
import { useHistory } from "react-router-dom"
import { addcartpost } from "../api/productApi"
import "../Pages/styles/productdetails.css"
const ProductDetails = () => {
    const params = useParams()
    const [data, setData] = useState("")
    const [productcount, setProductcount] = useState(1)
    useEffect(() => {

        getproductdetails(params.id).then((response) => {
            setData(response.data)
            console.log("responsebag=", response.data)
        }).catch(err => {
            console.log("error axios ProductDetails=", err)
            console.log(err)
        })

    }, [])
    const history = useHistory()
    const note = () => {

        createnote(params.id).then((res) => {
            history.push("/note")
        })
            .catch(err => {
                console.log("error axios ProductDetails=", err)
                console.log(err)
            })
    }
   
    const addcard = () => {
        addcartpost(params.id,productcount).then((res) => {
            history.push("/shoppingcart")
            
        }).catch(err => {
            console.log("error axios ProductDetails=", err)
            console.log(err)
        })
    }
    const HandlechangeCount = (event) => {
        setProductcount(event.target.value)
    }
    return (
        <div className="ProductDetailscontainer">
            <div className="detail">
                {data.image && <img className="ProductDetailImage" src={data.image} alt="Foto" />}
                <p>Title:{data.name}</p>
                <p>artikelnummer:{data.artikelnummer}</p>
                <p>price:{data.price}</p>
            </div>
            <label for="selectbagwomen">conut:</label>
            <input  type="number" className="selectbagwomen" value={productcount} onChange={(e) => HandlechangeCount(e)}/>
                
            <button onClick={addcard}><i className="fas fa-shopping-cart fa-2x"></i>Add to cart</button>
            <button onClick={note}><i className="far fa-heart fa-2x"></i>Add to Note</button>
        </div>
    )

}

export default ProductDetails