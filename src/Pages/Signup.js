import './styles/signup.css'
import {addsignupApi} from "../api/userApi"
import { useState } from "react"
const Signup = () => {

const [gender,setGender]=useState("Male")
const [name,setName]=useState("")
const [password,setPassword]=useState("")
const [repeatPassword,setRepeatPassword]=useState("")
const [email,setEmail]=useState("")

const checkedgender=(event,key)=>{
    switch (key) {
        
            case "Male":
            setGender(event.target.value)
            break;
            case "Female":
                setGender(event.target.value)
                break;
                case "Other":
                    setGender(event.target.value)
                    break;
                        
            default : 
            console.log("sorry addsignup")
    }

}

const Regestrieren=(event)=>{
    event.preventDefault()
    const addsignup = {
        name,
        password,
        email,
        gender
    }

    addsignupApi(addsignup).then((res)=>{
    alert("signup submitted successfully")
}).catch((error)=>{
    console.log(error);
})
}
    return (

        <div className="Signup">
            <form className="formsignup">
                <label for="gender">Gender:</label>
                <br></br>
                <input type="Radio" label="Male" value="Male" onClick={(e) => checkedgender(e, "Male")} />
                <label for="male">Male</label>
                <input type="Radio" label="Female"  value="Female" onClick={(e) => checkedgender(e, "Female")} />
                <label for="female">Female</label>
                <input type="Radio" label="Other"  value="Other" onClick={(e) => checkedgender(e, "Other")} />
                <label for="other">Other</label>
                <div className="register">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" value={name}  onChange={e => setName(e.target.value)}/>
                    <label for="password">password:</label>
                    <input type="text" id="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} />
                    <label for="password"> Repeat Password:</label>
                    <input type="text" id="password" name="repeatpassword"  value={repeatPassword} onChange={e=>setRepeatPassword(e.target.value)}/>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                </div>

                <button onClick={Regestrieren}>Regestrieren</button>

            </form>
        </div>
    )
}

export default Signup