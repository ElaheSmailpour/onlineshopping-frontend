import { Link } from "react-router-dom"
import "./styles/category.scss"
import { useState } from 'react';
import React from 'react';
import { serachProductApi } from "../api/productApi"
import ProductItemCategory from "./ProductItemCategory"

const Categorylist = () => {
    const [searchProduct, setSearchProduct] = useState("")
    const [productlist, setProductList] = useState([])


    /* useEffect(() => {
         if (searchProduct === "") {
             setProductList([])
         }
         else {
             serachProductApi(searchProduct).then((res) => {
                 setProductList(res.data)
             }).catch((error) => {
                 console.log("error with serachProduct", error)
             })
         }
        
 
     }, [searchProduct])
 */

    const searchkeyup = (event) => {
        console.log(event.key)
        if (event.key === "Enter") {
            if (searchProduct === "") {
                setProductList([])
            }
            else {
                serachProductApi(searchProduct).then((res) => {
                    setProductList(res.data)
                }).catch((error) => {
                    console.log("error with serachProduct", error)
                })
            }

        }
    }
    const getSearch = (event) => {

        const eventInput = event.target.value;
        setSearchProduct(eventInput)


    }
    return (
        <div className="category-container">
            <nav>

                <div className="Accesories">
                    <Link>Accesories</Link>
                    <ul>
                        <Link to="/ProductListCategory/60994aca5c079d1905146394"><li>jewelry</li></Link>

                    </ul>
                </div>
                <div >
                    <Link>Bag</Link>
                    <ul>
                        <Link to="/ProductListCategory/60a4a61e318a3c21e32494a8"><li>Women</li></Link>

                        <Link> <li>Men</li></Link>

                    </ul>
                </div>
                <div className="search">
                    <label><i className="fa fa-fw fa-search fa-5"></i>Search</label>
                    <input className="formcontrol" type="text" placeholder="Search" value={searchProduct} onChange={getSearch} onKeyUp={searchkeyup} />


                </div>

            </nav>
            {productlist.length === 0 && searchProduct  && <p>Not Found</p>}

            {productlist.map((item, index) => {
                return <div key={index}> <ProductItemCategory productimage={item.image}
                    productprice={item.price}
                    productid={item._id}
                />
                </div>
            })}
            <p className="backCategory"><Link to="/"><i class="fa fa-home fa-2x">Home</i></Link></p>
        </div>


    );

}

export default Categorylist

