import React from "react"
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import { getproductdetails } from "../api/productApi"
const ProductDetails = () => {
    const params = useParams()
    const [data, setData] = useState("")
    useEffect(() => {

        getproductdetails(params.id).then((response) => {
            setData(response.data)
            console.log("responsebag=", response.data)
        }).catch(err => {
            console.log("error axios ProductDetails=", err)
            console.log(err)
        })

    }, [])

    return (
        <div className="ProductDetails">
            <div className="detail">
                {data.image && <img className="image" src={data.image} alt="Foto" />}
                <p>{data.price}</p>
                <p>artikelnummer:{data.artikelnummer}</p>
            </div>
            <label for="selectbagwomen">conut:</label>
            <select className="selectbagwomen">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            <button><i className="fas fa-shopping-cart fa-2x"></i>Go to cart</button>
            <button><i className="far fa-heart fa-2x"></i>Go to Note</button>
        </div>
    )

}

export default ProductDetails