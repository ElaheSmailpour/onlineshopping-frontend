
import { useHistory } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';


import {addgoogleApi} from "../api/userApi"
const Google = () => {
   

    const history1 = useHistory()
    const responseGoogle = (response) => {
    
        addgoogleApi({token:response.tokenId}).then((res)=>{
            console.log("response=", response)
            const local = res.data.token;
            const name=res.data.name;
            const image=res.data.image;
          
            localStorage.setItem("name", name)
            localStorage.setItem("image", image)
            localStorage.setItem("token", local)
            console.log("res=", res)
            history1.push("/")
        })
        
      
    }
   
    return (
        <div className="Google">
            <h1>Login with Google</h1>
    
            <GoogleLogin
                clientId="828234666913-l6tv3hqml3adrbripk1l548g41sc0n1m.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

           

        </div>
    )
}

export default Google