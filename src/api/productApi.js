import getAxios from './baseApi'

export const getProductList = ()=>{
    return getAxios.get("/product")
}


