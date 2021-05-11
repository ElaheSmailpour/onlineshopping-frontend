import { Link } from "react-router-dom"
import { loginApi } from "../api/userApi.js"
import { useHistory } from "react-router-dom";
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
    return (
        <div className="Login">
            <h1>Login....</h1>
            <label>Email:</label>
            <input type="text" name={"email"} value={form.email} onChange={(e) => Handleform(e)} />
            <label>Password:</label>
            <input type="password" name={"password"} value={form.password} onChange={(e) => Handleform(e)} />
            <button onClick={submitlogin}>Login</button>
            <p>New User:Join Now!</p>
            <button><Link to="/signup">signup</Link></button>

        </div>
    )
}

export default Login