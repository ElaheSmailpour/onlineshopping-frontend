
import { useState } from "react"

import "./styles/note.css"
const Note = () => {
    const [showpage, setShowpage] = useState(false)
    const [showcancel, setShowcancel] = useState(false)
    const login = () => {
        setShowpage(true)
    }
    const cancel=()=>{
        setShowcancel(true)
    }
    return (
        <div className="Note">
       
            <h1>Note....</h1>
            <label>username:</label>
            <input type="text" />
            <button onClick={login}>login</button>
            {showpage ?
                <div className="ok">
                    <label>password:</label>
                    <input type="text" />
                    <button className="btncolor">ok</button>
                    {!showcancel ? 
                    <button onClick={cancel} className="btncolor">cancel</button>
                     : ""
                     }
                </div>
                : null}
        </div>
    )
}

export default Note