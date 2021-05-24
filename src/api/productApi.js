import getAxios from './baseApi'

export const getProductList = ()=>{
    return getAxios.get("/product")
}
export const getCategoryList = ()=>{
    return getAxios.get("/category")
}



export const getselectproduct = (cat)=>{
   
//  return getAxios.get(`/product/${cat}`)
//or
return getAxios.get(`/product/`+ cat)
   
}
export const getproductdetails = (productid)=>{
   
   
    return getAxios.get(`/product/details/`+ productid)
       
    }
    
    export const getnote = ()=>{
        return getAxios.get(`/note`)
           
        }

export const addProductApi=(product)=>{
    return getAxios.post("/product",product)
}

