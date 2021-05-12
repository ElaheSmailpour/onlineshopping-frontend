import { useState } from "react"
import { loginApi } from "../api/userApi.js"
//import { useHistory } from "react-router-dom";
const Note = () => {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const Handlechange = (event) => {

        event.preventDefault()
        const newform = { ...form }
        newform[event.target.name] = event.target.value;

        setForm(newform)
    }
    //const history = useHistory()
    const submit = () => {
        const body = {
            email: form.email,
            password: form.password
        }
        loginApi(body).then((res) => {
        
            alert("sucessfuly!")
        }).catch((error) => {
            console.log(error.response);
            alert("email or password is incorrect!")
        })

        //   history.push("/login")
    }
    return (
        <div className="Note">
            <h1>Note....</h1>
            <label>email:</label>
            <input type="text" name={"email"} value={form.email} onChange={(e) => Handlechange(e)} />
            <label>password:</label>
            <input type="password" name={"password"} value={form.password} onChange={(e) => Handlechange(e)} />
            <button onClick={submit}>submit</button>
        </div>
    )
}

export default Note