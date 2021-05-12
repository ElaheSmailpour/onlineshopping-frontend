import { useEffect } from "react"
import { useHistory } from "react-router-dom";

const Shoppingcart = () => {
    const history = useHistory()
    useEffect(() => {
        let local = localStorage.getItem("token")

        if (!local) {
            history.push("/login")
        }
    }, [history])
    
    return (
        <div className="Shoppingcart">
            <h1>Shoppingcart....</h1>


        </div>
    )
}

export default Shoppingcart