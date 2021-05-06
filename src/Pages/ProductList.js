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
            product list
            <ul>
                {products.map((item, index) => 
                <ProductItem productName={item.name} 
                                                           
                productPrice={item.price}
                />
                )}
            </ul>
        </div>
    );
};

export default ProductList;