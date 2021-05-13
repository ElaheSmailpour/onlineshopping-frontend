import './styles/signup.css'
import { addsignupApi } from "../api/userApi"
import { useState } from "react"
const Signup = () => {
    const [gender, setGender] = useState("Male")
    const [form, setForm] = useState({
        name: "",
        password: "",
        repeatPassword: "",
        email: ""
    })
 
    const checkedgender = (event) => {
        if (event.target.checked){
            setGender(event.target.name)
        }
           
    }
    const Regestrieren = (event) => {
        event.preventDefault()
        if (form.password !== form.repeatPassword) {
            alert("password is not equal repeatpassword")
            return;

        }

        const addsignup = {
            name: form.name,
            password: form.password,
            email: form.email,
            gender: gender
        }

        addsignupApi(addsignup).then((res) => {
            alert("signup submitted successfully")
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleChangeForm = (e) => {
        console.log(e.target, e.target.name)
        const newForm = { ...form };
        newForm[e.target.name] = e.target.value;
        setForm(newForm);
    }
    return (
        <div className="Signup">
            <form className="formsignup">
                <label for="gender">Gender:</label>
                <br></br>
                <input type="Radio" name="Male" label="Male" checked={gender === "Male"} onClick={(e) => checkedgender(e)} />
                <label for="male">Male</label>
                <input type="Radio" name="Female" label="Female" checked={gender === "Female"} value="Female"
                    onClick={(e) => checkedgender(e)} />
                <label for="female">Female</label>
                <input type="Radio" name="Other" label="Other" checked={gender === "Other"}
                    onClick={(e) => checkedgender(e)} />
                <label for="other">Other</label>
                <div className="register">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" value={form.name}
                        onChange={e => handleChangeForm(e)} />
                    <label for="password">password:</label>
                    <input type="password" id="password" name="password" value={form.password}
                        onChange={e => handleChangeForm(e)} />
                    <label for="password"> Repeat Password:</label>
                    <input type="text" id="password" name="repeatPassword" value={form.repeatPassword}
                        onChange={e => handleChangeForm(e)} />
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" value={form.email}
                        onChange={e => handleChangeForm(e)} />
                </div>
                <button onClick={Regestrieren}>Regestrieren</button>
            </form>
        </div>
    )
}
export default Signup