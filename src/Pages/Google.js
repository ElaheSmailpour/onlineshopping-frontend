import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
const Google = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [url, setUrl] = useState("")

    const responseGoogle = (response) => {
        console.log("response=", response)
        setName(response.profileObj.name)
        setEmail(response.profileObj.email)
        setUrl(response.profileObj.imageUrl)
    }

    const onSuccess = () => {

        alert('Logout made successfully ✌');
    }
    return (
        <div className="Google">
            <h1>Login with Google</h1>
            <h2>Welcome:{name}</h2>
            <h2>Email: {email}</h2>
            <img src={url} alt={name} />
            <GoogleLogin
                clientId="828234666913-l6tv3hqml3adrbripk1l548g41sc0n1m.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

            <GoogleLogout
                clientId="828234666913-l6tv3hqml3adrbripk1l548g41sc0n1m.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            ></GoogleLogout>

        </div>
    )
}

export default Google