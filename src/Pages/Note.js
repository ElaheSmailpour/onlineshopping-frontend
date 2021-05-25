//import { useState } from "react"
import { useEffect, useState } from 'react';
import "./styles/note.css"
import React from 'react';
import { getnote } from "../api/productApi"
import ProductItemCategory from './ProductItemCategory';

const Note = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getnote().then((res) => {
            console.log("data",res.data)
            setData(res.data)
        }).catch(err => {
            console.log("error axios ProductDetails=", err)
            console.log(err)
        })

    }, [])

    return (

        <div className="Note">
         <ul>
                {data.map((item, index) =>
                    <li key={index}>
                        <ProductItemCategory productimage={item.image}
                            productprice={item.price}
                            noteremove={true}
                            productid={item._id}
                        />
                    </li>
                )}

            </ul>
        </div>
    )
}

export default Note