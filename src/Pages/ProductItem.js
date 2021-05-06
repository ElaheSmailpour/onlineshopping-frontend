import React from 'react';

const ProductItem = ({productName,productPrice}) => {
    return (
        <li>
            <p>{productName}</p>
            <p>{productPrice}</p>
           
        </li>
    );
};

export default ProductItem;