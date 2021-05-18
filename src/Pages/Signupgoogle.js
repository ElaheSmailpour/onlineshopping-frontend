import { useState } from "react"
import {Link} from "react-router-dom"
import {addsignupgoogleApi} from "../api/userApi"
const Signupgoogle = () => {
    const [gender,setGender]=useState("Male")
    const [form, setForm] = useState({
        name: "",
        password: "",
        email: "",
        image: ""
    })
    const Handlechange = (event) => {
        const newform = { ...form }
        newform[event.target.name] = event.target.value;
        setForm(newform)
    }
    const Submit=(event)=>{
        event.preventDefault()
        if(form.password!== form.repeatpassword){
            alert("password is not equal repeatpassword")
            return;

        }
        const signupbody={
            name:form.name,
            email:form.email,
            password:form.password,
            repeatpassword:form.repeatpassword,
            image:form.image,
            gender:gender
        }
        addsignupgoogleApi(signupbody).then((res)=>{
          
            
            alert("signup submitted successfully")
        }).catch((error) => {
            console.log(error);
        
        })
    }
    const checkedgender=(event)=>{
        if (event.target.checked){
            setGender(event.target.name)
        }
       
    }
    return (
        <div className="Signupgoogle">
            <h1>Please signup now!</h1>
            <form className="signupgoogle-form" enctype="multipart/form-data">
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
                <br></br>
                <label>Name:</label>
                <input type="text" name="name" value={form.name} onChange={(e) => Handlechange(e)} />
                <label>Email:</label>
                <input type="text" name="email" value={form.email} onChange={(e) => Handlechange(e)} />
                <label>Password:</label>
                <input type="password" name="password" value={form.password} onChange={(e) => Handlechange(e)} />
                <label>RepeatPassword:</label>
                <input type="password" name="repeatpassword" value={form.repeatpassword} onChange={(e) => Handlechange(e)} />
                <label>Image:</label>
                <input type="file" name="image" value={form.image} onChange={(e) => Handlechange(e)} />
                <button onClick={Submit}>Submit</button>
                <p className="backtohome"><Link to="/"><i class="fa fa-home">Home</i></Link></p> 
              
            </form>
        </div>
    )
}


export default Signupgoogle