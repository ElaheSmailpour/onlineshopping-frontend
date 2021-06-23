import getAxios from './baseApi'

export const getProductList = () => {
    return getAxios().get("/product")
}
export const getCategoryList = () => {
    return getAxios().get("/category")
}



export const getselectproduct = (cat) => {

    //  return getAxios().get(`/product/${cat}`)
    //or
    return getAxios().get(`/product/` + cat)

}
export const getproductdetails = (productid) => {


    return getAxios().get(`/product/details/` + productid)

}

export const getnote = () => {
    return getAxios().get(`/note`)

}
export const createnote = (productid) => {
    return getAxios().get(`/note/${productid}`)

}
export const addcartpost = (productid,count) => {
    return getAxios().post(`/addcart`,{productid,count})

}
export const addcartinNote = (productid,count) => {
    return getAxios().post(`/addcart/addcartinNote`,{productid,count})

}
export const removeseletcount = (productid) => {
    return getAxios().delete(`/addcart/${productid}`)

}
export const getcart = () => {
    return getAxios().get(`/addcart`)

}
export const removenote = (productid) => {
    return getAxios().delete(`/note/${productid}`)

}



export const addProductApi = (product) => {
    return getAxios().post("/product/multiImage", product)
}

export const serachProductApi = (search) => {
    return getAxios().get(`/category/search?q=${search}`)

}