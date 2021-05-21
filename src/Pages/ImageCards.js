//import "../node_modules/bootstrap/scss/bootstrap.min-css";
import bag1 from "../Pages/images/bag1.jpg"
import React from "react"
import Bagwomen from "../Pages/Bagwomen"
const ImageCards = () => {
    return (
        <div className="container-fluid d-flex jusify-content-center">
            <div className="row">
                <div className="col-md-4">
                    <Bagwomen srcimage={bag1} />
                </div>
            </div>
        </div>
    )
}

export default ImageCards