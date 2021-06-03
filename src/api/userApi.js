import getAxios from './baseApi'

export const loginApi=(login)=>{
    return getAxios().post("/api/login",login)
}

export const getmetApi=()=>{
    return getAxios().get("/api/getme")
}


export const addsignupApi=(signup)=>{
    return getAxios().post("/api/signup",signup)
}
export const addsignupgoogleApi=(signup)=>{
    return getAxios().post("/api/signup",signup)
}

export const addgoogleApi=(google)=>{
    return getAxios().post("/api/auth/google",google)
}


export const addsignupgoogle1Api=(google)=>{
    return getAxios().post("/api/signupgoogle1",google)
}

export const changeProfile1Api=(userdata)=>{
    return getAxios().put("/api/",userdata)
}
