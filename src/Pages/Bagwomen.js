import "../Pages/styles/bagwomen.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"

const Bagwomen = (srcimage) => {
    return (
        <div className="Bagwomen">
            <h1>Bagwomen</h1>
            <div className="card text-center">
                <div className="overflow">
                    <img src={srcimage}  alt="foto" className="card-img-top" />
                </div>
            </div >
            <div className="card-body text-dark">
            <h1 className="card-title">titel:</h1>
            <p className="card-text text-secondary"> joop handle bag, in a simple look with practical division</p>
            </div>
            
              
                
           
        </div>
    )
}

export default Bagwomen
