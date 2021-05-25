import React from "react"
import {removenote} from "../api/productApi"
import {Link} from "react-router-dom"
const ProductItemCategory = ({ productprice,productimage,productid,noteremove}) => {

const remove=()=>{
    removenote(productid).then((res)=>{
     alert("delete")   
    }).catch(err => {
        console.log("error axios ProductListCategory=", err)
        console.log(err)
    })
}
    return (
        <div className="removenote">
        <Link to={`/productdetails/${productid}`} className="productdetails">
       
            <img className="productdetailsimage" src={productimage} alt="Foto"/>
            <p>price:{productprice}</p>
         
           
            </Link>
            {noteremove && <button onClick={remove}>[X]</button> }
            </div>


    );
};

export default ProductItemCategory;