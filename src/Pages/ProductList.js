import React, {useEffect, useState} from 'react';
import {getProductList} from "../api/productApi";
import ProductItem from "./ProductItem";

const ProductList = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductList().then(response => {
            setProducts(response.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
           <h1>product list...</h1> 
            <ul>
                {products.map((item, index) => 
                <li key={index}>
                <ProductItem productName={item.name} 
                                                           
                productPrice={item.price}
              
                />
                 </li>
                )}
               
            </ul>
        </div>
    );
};

export default ProductList;