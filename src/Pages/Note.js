//import { useState } from "react"
import { useEffect, useState } from 'react';
import "./styles/note.css"
import React from 'react';
import { getnote } from "../api/productApi"
import ProductItemCategory from './ProductItemCategory';
import {Link} from "react-router-dom"



const Note = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        readdata()
       
    }, [])

    const readdata = () => {
        getnote().then((res) => {
            console.log("data", res.data)
            setData(res.data)
        }).catch(err => {
            console.log("error axios ProductDetails=", err)
            console.log(err)
        })
    }
    return (

        <div className="Note">
            <h1 className="headerNote">My favorite
            <p className="backtohomeNote"><Link to="/"><i className="fa fa-home ">Home</i></Link></p>
            </h1>
           
            <ul className="noteUl">
                {data.map((item, index) =>
                    <li key={index} className="noteLi">
                        <ProductItemCategory productimage={item.image}
                            productprice={item.price}
                            noteremove={true}
                            productid={item._id}
                            updatedata={readdata}
                            addcartprops={true}
                        />
                    </li>
                )}

            </ul>
           
                              
          
        </div>
    )
}

export default Note