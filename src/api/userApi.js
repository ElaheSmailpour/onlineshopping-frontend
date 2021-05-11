import getAxios from './baseApi'


export const addsignupApi=(signup)=>{
    return getAxios.post("/api/signup",signup)
}

