import React from 'react';

const ProductItem = ({productName,productPrice}) => {
    return (
     <div className="ProductItem">
            <p>{productName}</p>
            <p>{productPrice}</p>
            </div>
        
        
    );
};

export default ProductItem;