import getAxios from './baseApi'
export const loginApi=(login)=>{
    return getAxios.post("/api/login",login)
}


export const addsignupApi=(signup)=>{
    return getAxios.post("/api/signup",signup)
}

export const addgoogleApi=(google)=>{
    return getAxios.post("/api/auth/google",google)
}
