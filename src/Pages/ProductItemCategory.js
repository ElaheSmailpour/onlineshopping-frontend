import React from "react"
import { removenote } from "../api/productApi"
import "../Pages/styles/ProductItemCategory.css"
import { Link } from "react-router-dom"
const ProductItemCategory = ({ productprice, productimage, productid, noteremove, updatedata, countporduct,addcart }) => {

    const remove = () => {
        removenote(productid).then((res) => {
            updatedata()
        }).catch(err => {
            console.log("error axios ProductListCategory=", err)
            console.log(err)
        })
    }
    return (
        
        <div className="ProductItemCategory">
          
                <div className="productcontainer">

                    <Link to={`/productdetails/${productid}`} className="productimage">
                        <img className="productdetailsimage" src={productimage} alt="Foto" />
                    </Link>
                    
                    <div className="ProductItemCategoryText">
                    <p>conut:{countporduct}</p>
                    <p>price:{productprice}</p>
                    </div>
                
            </div>
            {noteremove && <button className="removeButton" onClick={remove}>[X]</button>}
            <div className="adddivbutton">
              {addcart && <button className="addButton"><i className="fas fa-shopping-cart fa-2x"></i>Add cart</button>}
            </div>
        </div>


    );
};

export default ProductItemCategory;