
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import React from 'react';
import { changeProfile1Api } from "../api/userApi"
import { getmetApi } from "../api/userApi"
import "../Pages/styles/changeProfile.css"
const ChangeProfile = () => {

    useEffect(() => {
        getmetApi().then((res) => {
            const newform = { ...form }
            newform.name = res.data.name;
            setForm(newform)
            setGender(res.data.gender)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const [gender, setGender] = useState("Male")
    const [file, setFile] = useState("")
    const [form, setForm] = useState({
        name: "",
        password: ""
    })
    const Handlechange = (event) => {
        const newform = { ...form }
        newform[event.target.name] = event.target.value;
        setForm(newform)
    }
    const Submit = (event) => {
        event.preventDefault()
    

        const data = new FormData()
        data.append("name", form.name);

        data.append("password", form.password);
        data.append("gender", gender);

        data.append("image", file);
        changeProfile1Api(data).then((res) => {
            console.log("ressignupmitgoogle=", res)
            alert("signup submitted successfully")
        }).catch((error) => {
            console.log(error);
        })
    }
    const checkedgender = (event) => {
        if (event.target.checked) {
            setGender(event.target.name)
        }
    }
    const HandlechangeImage = (event) => {
        const profilImage = event.target.files[0]
        console.log("profilImage=", profilImage)
        setFile(profilImage)
    }


    return (
        <div className="changeProfile">
            <h1>Please Chaneg Your Profile!</h1>
            <p className="changeprofilehome"><Link to="/"><i class="fa fa-home fa-2x">Home</i></Link></p>
            <form className="changeProfile-form" encType="multipart/form-data">
            
                <label className="gernderLabel"  for="gender">Gender:</label>
                <div className="genderProfile">
                <input type="Radio" name="Male" label="Male" checked={gender === "Male"} onClick={(e) => checkedgender(e)} />
                <label for="male">Male</label>
                <input type="Radio" name="Female" label="Female" checked={gender === "Female"} value="Female"
                    onClick={(e) => checkedgender(e)} />
                <label for="female">Female</label>
                <input type="Radio" name="Other" label="Other" checked={gender === "Other"}
                    onClick={(e) => checkedgender(e)} />
                <label for="other">Other</label>
                </div>
                <div className="inputProfile">
                <label>Name:</label>
                <input type="text" name="name" value={form.name} onChange={(e) => Handlechange(e)} />
                <label>Password:</label>
                <input type="password" name="password" value={form.password} onChange={(e) => Handlechange(e)} />
                <label>RepeatPassword:</label>
                <input type="password" name="repeatpassword" value={form.repeatpassword} onChange={(e) => Handlechange(e)} />
                </div>
                <div className="fileProfile">
                <label>Image:</label>
                <input type="file" name="image" id="files" onChange={HandlechangeImage} />
                </div>
                <button  className="changeButton" onClick={Submit}>save</button>
              


            </form>




        </div>
    )
}

export default ChangeProfile