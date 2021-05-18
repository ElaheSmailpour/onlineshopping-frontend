import { Link } from "react-router-dom"
import "./styles/login.css"
import { loginApi } from "../api/userApi.js"
import { useHistory } from "react-router-dom";
import pic1 from "../Pages/images/login.png"
import { useState } from "react"
const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
   
    const Handleform = (event) => {
        event.preventDefault()
        const newform = { ...form }
        newform[event.target.name] = event.target.value
        setForm(newform)
    }
    const history = useHistory()
    const submitlogin = (event) => {
        event.preventDefault()
        const bodylogin = {
            email: form.email,
            password: form.password
        }
        loginApi(bodylogin).then((res) => {
            console.log("res=",res)
            const local = res.data.token;
            const name=res.data.name;
            const image=res.data.image;
            const imagegoogle=res.file.filename;
            localStorage.setItem("token", local)
            localStorage.setItem("name", name)
            localStorage.setItem("image", image)
            localStorage.setItem("imagegoogle",imagegoogle)
            console.log("res=", res)
            history.push("/")
        }).catch((error) => {
            console.log(error.response);
            alert("email or password is incorrect!")
        })

    }
    const historygoogle = useHistory()
    const googleAccount=()=>{
        console.log("googleAccount")
        historygoogle.push("/google")
    }
    return (
        <div className="logincontainer" >

            <form className="loginform">
                <div className="imgcontainer">
                    <span  className="close">
                    <Link to="/">&times;</Link></span>
                    <img src={pic1} alt="Avatar" className="avatar" />
                </div>
                <div className="Login">
                    <label>User Email:</label>
                    <input type="text" name={"email"} value={form.email} onChange={(e) => Handleform(e)} />
                    <label>Password:</label>
                    <input type="password" name={"password"} value={form.password} onChange={(e) => Handleform(e)} />
                </div>
                <div className="containerbutton">
                    <button  className="btnlogin" onClick={submitlogin}>Login</button>
                    <button className="btngooglelogin" onClick={googleAccount}>login with google-Account</button>

                    <p>New User:Join Now with Login!
            <button className="signupbtn"><Link to="/signup">signup</Link></button></p>
            <p>New User:Join Now with Google-Login!
            <button className="signupgooglebtn"><Link to="/signupgoogle">signupGoogle</Link></button></p>
                       
                       
                </div>
            </form>
        </div>

    )
}

export default Login