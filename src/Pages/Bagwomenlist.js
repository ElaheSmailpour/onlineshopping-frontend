import React from "react"

const Bagwomenlist = ({ productprice,productimage}) => {


    return (
        <div className="Bagwomenlist">
            <img className="Bagwomenimage" src={productimage} alt="Foto"/>
            <p>{productprice}</p>
           
        </div>
        


    );
};

export default Bagwomenlist;