import { addProductApi, getCategoryList } from "../api/productApi"
import "./styles/addproduct.css"
import { useState, useEffect } from "react"


const NewProduct = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("10")
    const [category, setCategory] = useState("")
    const [atikelnumber, setArtikel] = useState("")

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getCategoryList().then((res) => {
            setCategoryList(res.data)
        })
    }, [])


    const HandlechangeInput = (event, key) => {
        switch (key) {
            case "name":
                setName(event.target.value)
                break;

            case "price":
                setPrice(event.target.value)
                break;
            case "atikelnumber":
                setArtikel(event.target.value)
                break;
            case "category":
                setCategory(event.target.value)
                break;
                default:
                    console.log("Sorry, we are out of select " );
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
             name, price, atikelnumber, category 
            
            }
        addProductApi(body).then(res => {
            alert("submitted")
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className="newProductPage">
            <form>
                <input type="text" placeholder="productname" value={name} onChange={(e) => HandlechangeInput(e, "name")} />
                <input type="number" placeholder="productprice" value={price} onChange={(e) => HandlechangeInput(e, "price")} />
                <input type="number" placeholder="productatikelnumber" value={atikelnumber} onChange={(e) => HandlechangeInput(e, "atikelnumber")} />

                <select value={category} onChange={(e) => HandlechangeInput(e, "category")}>
                    <option>choise: </option>
                    {categoryList.map((item,index) => 
                    <option key={index} value={item._id}>
                        {item.name}
                    </option>)
                    }
                </select>
                <button onClick={handleSubmit}>submit</button>
            </form>
        </div>
    )
}

export default NewProduct