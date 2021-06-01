import { Link } from "react-router-dom"
import React from 'react';
import "./styles/login.css"
import { loginApi } from "../api/userApi.js"
import { useHistory } from "react-router-dom";
import pic1 from "../Pages/images/login1.svg"
import { useState } from "react"
const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        remberme:false
    })

    const Handleform = (event) => {
        event.preventDefault()
        const newform = { ...form }
        newform[event.target.name] = event.target.value
        setForm(newform)
    }
 
    const submitlogin = (event) => {
        event.preventDefault()
        const bodylogin = {
            email: form.email,
            password: form.password,
            remberme:form.remberme
        }
        loginApi(bodylogin).then((res) => {
            console.log("res=", res)
            const local = res.data.token;
            const name = res.data.name;
            const image = res.data.image;

            localStorage.setItem("token", local)
            localStorage.setItem("name", name)
            localStorage.setItem("image", image)

            console.log("res=", res)
            window.location.assign("/")
           
        }).catch((error) => {
            console.log(error.response);
            alert("email or password is incorrect!")
        })

    }
    const historygoogle = useHistory()
    const googleAccount = () => {
        console.log("googleAccount")
        historygoogle.push("/google")
    }
    const OnchangeremberMe=(event)=>{
        event.preventDefault()
        const newform = { ...form }
        newform.remberme = event.target.checked;
        setForm(newform)
    }
    return (
        <div className="logincontainer" >

            <form className="loginform">
                <div className="imgcontainer">
                    <span className="close">
                        <Link to="/">&times;</Link></span>
                    <img src={pic1} alt="Avatar" className="avatar" />
                </div>
                <div className="Login">
                    <label className="loginlabel">Email:</label>
                    <input type="text" className="box" name={"email"} value={form.email} onChange={(e) => Handleform(e)} />
                    <label className="loginlabel">Password:</label>
                    <input type="password" className="box" name={"password"} value={form.password} onChange={(e) => Handleform(e)} />
                </div>
                <div className="containerbutton">
                    <button className="btnlogin" onClick={submitlogin}>Login</button>
                    <button className="btngooglelogin" onClick={googleAccount}>google-Account</button>
                </div>
                <div className="remember">
                <label className="rememberMe">Remember me:</label>
                    <input type="checkbox" onChange={(e)=>OnchangeremberMe(e)} />
                </div>
                <div className="signup">
                    <p className="signuptext">New User:Join Now!
            <button className="signupbtn"><Link to="/signup">signup</Link></button></p>


                </div>
            </form>
        </div>

    )
}

export default Login