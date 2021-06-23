
import React, { useState } from 'react'
const ProductsImageMulti = ({multi}) => {
    const [imageselectedIndex,setimageselectedIndex]=useState(0)
    const imageselect=(i)=>{
        setimageselectedIndex(i)
    }
    return (
        <div className="ProductsImageMulti">
            
            <img src={multi[imageselectedIndex]} alt="img"   width="200rem"/>
            {multi.map((item,index)=>{
                return <img onClick={()=>imageselect(index)} key={index} src={item} alt="pic" width="100rem"/>
            })}
        </div>
    )
}

export default ProductsImageMulti