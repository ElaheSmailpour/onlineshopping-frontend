import getAxios from './baseApi'

export const addcontactApi=(contact)=>{
    return getAxios.post("/contact",contact)
}