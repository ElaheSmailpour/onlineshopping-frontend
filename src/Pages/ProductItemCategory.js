import React from "react"
import {Link} from "react-router-dom"
const ProductItemCategory = ({ productprice,productimage,productid}) => {


    return (
        <Link to={`/productdetails/${productid}`} className="productdetails">
       
            <img className="productdetailsimage" src={productimage} alt="Foto"/>
            <p>price:{productprice}</p>
           
            </Link>
        


    );
};

export default ProductItemCategory;