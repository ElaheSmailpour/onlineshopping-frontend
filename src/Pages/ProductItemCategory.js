import React from "react"
import { removenote } from "../api/productApi"
import "../Pages/styles/ProductItemCategory.css"
import { Link } from "react-router-dom"
const ProductItemCategory = ({ productprice, productimage, productid, noteremove }) => {

    const remove = () => {
        removenote(productid).then((res) => {
            alert("delete")
        }).catch(err => {
            console.log("error axios ProductListCategory=", err)
            console.log(err)
        })
    }
    return (
        <div className="ProductItemCategory">
            <Link to={`/productdetails/${productid}`} className="productdetails">
                <div className="productcontainer">
                  
                    <div className="productimage">
                        <img className="productdetailsimage" src={productimage} alt="Foto" />
                    </div>
                  
                    <p>price:{productprice}</p>

                </div>
            </Link>
            {noteremove && <button onClick={remove}>[X]</button>}
        </div>


    );
};

export default ProductItemCategory;