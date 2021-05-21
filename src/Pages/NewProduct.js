import { addProductApi, getCategoryList } from "../api/productApi"
import "./styles/addproduct.css"
import { useState, useEffect } from "react"
import React from 'react';

const NewProduct = () => {

    const [name, setName] = useState("");
    const [inventory,setInventory]=useState("")
    const [price, setPrice] = useState("10");
    const [artikelnummer, setartikelnummer] = useState("");
    const [category, setCategory] = useState("");

    const [categoryList,setCategoryList] = useState([]);

    useEffect(() => {
        getCategoryList().then(res => {
            setCategoryList(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    const handleChangeInput = (event, key) => {
        switch (key) {
            case "name":
                setName(event.target.value)
                break;
            case "price":
                setPrice(event.target.value)
                break;
            case "artikelnummer":
                setartikelnummer(event.target.value)
                break;
            case "category":
                setCategory(event.target.value)
                break;
                case "inventory":
                    setInventory(event.target.value)
                    break;
                default : 
                console.log("sorry addproduct")
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const addproductbody = {
            name,
            price,
            category,
            artikelnummer,
            inventory
        }
        addProductApi(addproductbody).then(res=>{
            alert("submitted successfully")
        }).catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className={"newProductPage"}>
            <form>
                <label>Name:</label>
                <input placeholder="name" value={name} onChange={(e) => handleChangeInput(e, "name")}/>
               
                <label>Price:</label>
                 <input placeholder="price" type={"number"} value={price}
                       onChange={(e) => handleChangeInput(e, "price")}/>
               <label>Artikelnummer_</label>
                <input placeholder="artikelnummer" type={"number"} value={artikelnummer}
                       onChange={(e) => handleChangeInput(e, "artikelnummer")}/>
              <label>Inventory:</label>
              <input placeholder="Inventory" type={"number"} value={inventory}
                       onChange={(e) => handleChangeInput(e, "inventory")}/>
                       <label>Category:</label>
                <select placeholder="category" value={category} onChange={(e) => handleChangeInput(e, "category")}>
                    <option>choise:</option>

                    {categoryList.map((item,index)=>
                    <option key={index} value={item._id}>{item.name}</option>)}
                </select>
                <button onClick={handleSubmit}>submit</button>
                
            </form>
        </div>
    );
};

export default NewProduct;