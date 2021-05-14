import { Link } from "react-router-dom"
import "./styles/login.css"
import { loginApi } from "../api/userApi.js"
import { useHistory } from "react-router-dom";
import { useState } from "react"
const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [showx, setShowX] = useState(true)
    const Handleform = (event) => {
        event.preventDefault()
        const newform = { ...form }
        newform[event.target.name] = event.target.value
        setForm(newform)
    }
    const history = useHistory()
    const submitlogin = () => {
        const bodylogin = {
            email: form.email,
            password: form.password
        }
        loginApi(bodylogin).then((res) => {
            const local = res.data.token;
            localStorage.setItem("token", local)
            console.log("res=", res)
            history.push("/")
        }).catch((error) => {
            console.log(error.response);
            alert("email or password is incorrect!")
        })

    }
    const close = () => {
        setShowX(!showx)
        
    }
    return (
        <div className="logincontainer" >

            <form className="loginform">
                <div className="imgcontainer">
                    {showx ?
                    <span onclick={close} id="id01" className="close" title="Close Modal">&times;</span>
                   : null}
                    <img src="../pages/images/login.png" alt="Avatar" className="avatar" />
                </div>
                <div className="Login">
                    <label>User Email:</label>
                    <input type="text" name={"email"} value={form.email} onChange={(e) => Handleform(e)} />
                    <label>Password:</label>
                    <input type="password" name={"password"} value={form.password} onChange={(e) => Handleform(e)} />
                </div>
                <div className="btnlogin">
                    <button onClick={submitlogin}>Login</button>
                    <button>login with google-konot</button>

                    <p>New User:Join Now!
            <button><Link to="/signup">signup</Link></button>
                        <button><Link to="/">close</Link></button>
                    </p>
                </div>
            </form>
        </div>

    )
}

export default Login