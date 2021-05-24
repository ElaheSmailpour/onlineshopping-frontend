import getAxios from './baseApi'

export const getProductList = ()=>{
    return getAxios.get("/product")
}
export const getCategoryList = ()=>{
    return getAxios.get("/category")
}



export const getselectproduct = (cat)=>{
   
  // return getAxios.get(`/select/${cat}`)
    return getAxios.get(`/product`,{params:{category:"Bag"}})
}


export const addProductApi=(product)=>{
    return getAxios.post("/product",product)
}

