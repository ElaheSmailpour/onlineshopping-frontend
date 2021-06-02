import { Link } from "react-router-dom"
import "./styles/category.scss"
import { useState,useRef} from 'react';
import React from 'react';
import {serachProduct} from "../api/productApi"
import { useHistory } from "react-router-dom"
const Categorylist = (props) => {
   // const [searchProduct, setSearchProduct] = useState("")
   // const [searchResult, setSearchResult] = useState("")
const inputRef=useRef("")


    const history=useHistory()
    const search = (productid) => {
        serachProduct(productid).then((res)=>{
           history.push("/")
        }).catch((error)=>{
            console.log("error with seachProduct=",error)
        })
    }

    const getSearch = (search) => {
        console.log("inputRef=",inputRef.current.value)
       /*
        props.searchKeyword(inputRef.current.value)

       // const eventInput = event.target.value;
        setSearchProduct(search)
        if(search != ""){
            const newContactlist=data.filter((contact)=>{
                return  Object.values(contact).join("").toLocaleLowerCase().includes(search.toLocaleLowerCase())
                 
            })
            setSearchResult(newContactlist)
        }
        else {
            setSearchResult(contact)
        }
*/
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
                    <input className="formcontrol" type="text" placeholder="Search" ref={inputRef} value={props.search} onChange={getSearch} />


                </div>
                <button onClick={search}> Search</button>
            </nav>

            <p className="backCategory"><Link to="/"><i class="fa fa-home fa-2x">Home</i></Link></p>
        </div>


    );

}

export default Categorylist

