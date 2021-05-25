import { useState } from "react"
import {addProductApi} from "../api/productApi"
import React from "react"
const Test = () => {
const [form,setForm]=useState({
    name:"",
    price:""
})
const ok=(event)=>{
    event.preventDefault()
    const add={
        name:form.name,
        price:form.price
    }
    addProductApi(add).then((res)=>{
        alert("test  successfully")
    }).catch((error) => {
        console.log("testerr=",error);
    
    })
}
const Handelchange=(event)=>{
    const newform={...form}
    newform[event.target.name]=event.target.value;
    setForm(newform)
  
}
    return (
        <div className="Test">
            <label>Name:</label>
            <input type="text" name="name"  value={form.name}  onChange={e => Handelchange(e)}/>
            <label>price:</label>
            <input type="number" name="price" value={form.price}  onChange={e => Handelchange(e)} />
            <button onClick={ok}>ok</button>
        </div>
    )
}

export default Test