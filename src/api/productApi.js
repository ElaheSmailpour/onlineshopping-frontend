import getAxios from './baseApi'

export const getProductList = ()=>{
    return getAxios.get("/product")
}
export const getCategoryList = ()=>{
    return getAxios.get("/category")
}

export const addProductApi=(product)=>{
    return getAxios.post("/product",product)
}

