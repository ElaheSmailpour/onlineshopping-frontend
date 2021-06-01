import { Link } from "react-router-dom"
import "./styles/category.scss"
import React, { useState } from 'react';
import {serachProduct} from "../api/productApi"
import { useHistory } from "react-router-dom"
const Categorylist = () => {
    const [searchProduct, setSearchProduct] = useState("")


    const history=useHistory()
    const search = (productid) => {
        serachProduct(productid).then((res)=>{
           history.push("/")
        }).catch((error)=>{
            console.log("error with seachProduct=",error)
        })
    }

    const onchangeSearch = (event) => {
        const eventInput = event.target.value;
        setSearchProduct(eventInput)
    }
    return (
        <div className="category-container">
            <nav>

                <div>
                    <Link>Accesories</Link>
                    <ul>
                        <Link to="/ProductListCategory/60994aca5c079d1905146394"><li>jewelry</li></Link>

                    </ul>
                </div>
                <div>
                    <Link>Bag</Link>
                    <ul>
                        <Link to="/ProductListCategory/60a4a61e318a3c21e32494a8"><li>Women</li></Link>

                        <Link> <li>Men</li></Link>

                    </ul>
                </div>
                <div className="search">
                    <label><i className="fa fa-fw fa-search fa-5"></i></label>
                    <input className="formcontrol" type="text" placeholder="Search" onChange={(e) => onchangeSearch(e)} />


                </div>
                <button onClick={search}> Search</button>
            </nav>

            <p className="backCategory"><Link to="/"><i class="fa fa-home fa-2x">Home</i></Link></p>
        </div>


    );

}

export default Categorylist

