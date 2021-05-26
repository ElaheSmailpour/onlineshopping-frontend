
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { getselectproduct } from "../api/productApi";
import ProductItemCategory from "./ProductItemCategory"

import React from "react"

const ProductListCategory = () => {

    const [products, setProducts] = useState([])
    const params = useParams()
    console.log("params=", params)
    useEffect(() => {
        getselectproduct(params.cat).then(response => {
            setProducts(response.data);
            console.log("responsebag=", response.data)
        }).catch(err => {
            console.log("error axios ProductListCategory=", err)
            console.log(err)
        })
    }, [])

    return (
        <div className="ProductListCategorycontainer">

            <ul>
                {products.map((item, index) =>
                    <li key={index}>
                        <ProductItemCategory productimage={item.image}
                            productprice={item.price}
                            productid={item._id}
                        />
                    </li>
                )}

            </ul>

        </div>
    )
}

export default ProductListCategory
