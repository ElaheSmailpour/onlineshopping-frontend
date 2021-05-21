import { useState } from "react"

import "./styles/note.css"
import React from 'react';
const Note = () => {
    const [showpage, setShowpage] = useState(false)
   
    const login = () => {
        setShowpage(true)
    }
    const cancel=()=>{
       
        setShowpage(false)
    }
    return (

        <div className="Note">
            
    {!showpage ? 
    <div>
            <h1>Note....</h1>
            
            <label>username:</label>
            <input type="text" />
            <button onClick={login}>login</button>
            </div>
            : "" }

            {showpage ?
                <div className="ok">
                    <label>password:</label>
                    <input type="text" />
                    <button className="btncolor">ok</button>
                     
                    <button onClick={cancel} className="btncolor">cancel</button>
                     
                </div>
                : null}
                
        </div>
    )
}

export default Note