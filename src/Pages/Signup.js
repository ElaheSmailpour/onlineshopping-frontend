import './styles/signup.css'
const Signup = () => {
    return (
        <div className="Signup">
            <form className="gender">
            <label for="gender">Gender:</label>
            <br></br>
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">Female</label>
                <input type="radio" id="other" name="gender" value="other" />
                <label for="other">Other</label>
                <div className="register">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label for="password">password:</label>
                <input type="text" id="password" name="password" />
              
                <label for="password"> Repeat Password:</label>
                <input type="text" id="password" name="password" />
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" />
                </div>
                <button>Regestrieren</button>
                
            </form>
        </div>
    )
}

export default Signup