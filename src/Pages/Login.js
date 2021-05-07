import {Link} from "react-router-dom"
const Login = () => {
    return (
        <div className="Login">
            <h1>Login....</h1>
            <label>Email:</label>
            <input type="text" />
            <label>Password:</label>
            <input type="text" />
            <button>Login</button>
            <p>New User:Join Now!</p>
            <button><Link to="/signup">signup</Link></button>

        </div>
    )
}

export default Login