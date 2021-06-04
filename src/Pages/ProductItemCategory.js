import React from "react"
import { removenote } from "../api/productApi"
import "../Pages/styles/ProductItemCategory.css"
import { Link } from "react-router-dom"
import { addcartinNote } from "../api/productApi"
import { useHistory } from "react-router-dom"
const ProductItemCategory = ({ productprice, productimage, productid, noteremove, updatedata,  addcartprops ,productname}) => {

    const remove = () => {
        removenote(productid).then((res) => {
            updatedata()
        }).catch(err => {
            console.log("error axios ProductListCategory=", err)
            console.log(err)
        })
    }
    const history = useHistory()
    const addcartimnote = () => {
        addcartinNote(productid, 1).then((res) => {
            history.push("/shoppingcart")
        }).catch((error) => {
            console.log("error addcartimnote=", error)
        })
    }
    return (

        <div className="ProductItemCategory">

            <div className="productcontainer">

                <Link to={`/productdetails/${productid}`} className="productimage">
                    <img className="productdetailsimage" src={productimage} alt="Foto" />
                </Link>

                <div className="ProductItemCategoryText">
                   <p>Titel:{productname}</p>
                    <p>price:{productprice}</p>
                </div>

            </div>
            {noteremove && <button className="removeButton" onClick={remove}>[X]</button>}
            <div className="adddivbutton">
                {addcartprops && <button onClick={addcartimnote} className="addButton"><i className="fas fa-shopping-cart fa-2x"></i>Add cart</button>}
            </div>
        </div>


    );
};

export default ProductItemCategory;