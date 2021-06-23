import React from "react"
import { createnote } from "../api/productApi"
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';

import { getproductdetails } from "../api/productApi"
import { useHistory } from "react-router-dom"
import { addcartinNote } from "../api/productApi"
import "../Pages/styles/productdetails.css"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import ProductsImageMulti from './ProductsImageMulti'
const ProductDetails = () => {
    const params = useParams()
    const [data, setData] = useState("")

    useEffect(() => {

        getproductdetails(params.id).then((response) => {
            setData(response.data)
            console.log("responsebag=", response.data)
        }).catch(err => {
            console.log("error axios ProductDetails=", err)
            console.log(err)
        })

    }, [params.id])
    const history = useHistory()
    const note = () => {

        createnote(params.id).then((res) => {
            history.push("/note")
        })
            .catch(err => {
                console.log("error axios ProductDetails=", err)
                console.log(err)
            })
    }

    const addcard = () => {
        addcartinNote(params.id, 1).then((res) => {
            history.push("/shoppingcart")

        }).catch(err => {
            console.log("error axios ProductDetails=", err)
            console.log(err)
        })


    }

    return (
        <div className="ProductDetails">
            <div className="ProductDetailscontainer">
                <div className="detail">
                    {data.imagemulti &&
                        <ProductsImageMulti multi={data.imagemulti} />}
                </div>
                <video width="400" controls>
                    <source src={data.video} type="video/mp4" />
                  
  Your browser does not support HTML video.
</video>

                <div className="detailstext">
                    <p>Title:{data.name}</p>
                    <p>artikelnummer:{data.artikelnummer}</p>
                    <p>price:{data.price}</p>


                </div>
                <div className="productdetailsDiv">
                    <button className="productdetailsButton" onClick={addcard}><i className="fas fa-shopping-cart fa-2x"></i>Add to cart</button>
                    <button className="productdetailsButton" onClick={note}><i className="far fa-heart fa-2x"></i>Add to Note</button>
                </div>
            </div>
            <Card.Footer className="text-muted footercontact">
                <p>Author: Elahe Smailpour</p>
                <p>Address: Golzheimer Strasse Düsseldorf 130</p>
                <p>Telefon:0176176666</p>
                <p>contact us via:
  <a href="mailto:hege@example.com">eli_es87@yahoo.com</a>
                    <a href="https://www.instagram.com/"><i class="fab fa-instagram-square fa-2x"></i></a>
                    <a href="https://mail.yahoo.com/?.lang=de-DE"><i class="fas fa-envelope-square fa-2x"></i></a>
                    <a href="http://linkedin.com"><i class="fab fa-linkedin fa-2x"></i></a>
                </p>

            </Card.Footer>
            <p className="backtohomeProductdetails"><Link to="/"><i class="fa fa-home fa-2x">Home</i></Link></p>


        </div>
    )

}

export default ProductDetails