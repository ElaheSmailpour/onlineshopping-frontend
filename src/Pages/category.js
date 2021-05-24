import { Link } from "react-router-dom"
import "./styles/category.scss"
import React from 'react';
import menshirts2 from "../Pages/images/menshirts2.jpeg"
import menshirts4 from "../Pages/images/menshirts4.jpeg"
import bag8 from "../Pages/images/bag8.jpeg"
import bracelet3 from "../Pages/images/bracelet3.jpeg"
const Categorylist = () => {

    return (
        <div className="category-container">
            <nav>
                <div className="categorylist">
                    <Link>Children</Link>
                    <ul>
                        <Link><li>shirt</li></Link>

                        <Link><li>trousers</li></Link>
                        <Link> <li>dress</li></Link>
                    </ul>
                </div>
                <div>
                    <Link>Women</Link>
                    <ul>
                        <Link><li>shirt</li></Link>
                        <Link><li>trousers</li></Link>
                        <Link> <li>dress</li></Link>
                    </ul>

                </div>
                <div>
                    <Link>Men</Link>
                    <ul>
                        <Link><li>shirt</li></Link>
                        <Link><li>trousers</li></Link>
                        <Link> <li>dress</li></Link>

                    </ul>
                </div>
                <div>
                    <Link>Accesories</Link>
                    <ul>
                        <Link to="/ProductListCategory/60994aca5c079d1905146394"><li>Ring</li></Link>
                        <Link><li>bracelet</li></Link>


                    </ul>
                </div>
                <div>
                    <Link>Bag</Link>
                    <ul>
                        <Link to="/ProductListCategory/60a4a61e318a3c21e32494a8"><li>Women</li></Link>

                        <Link> <li>Men</li></Link>

                    </ul>
                </div>

            </nav>
            <div className="picturescategorycontainer">
                <div className="picturescategory">
                    <img src={menshirts2} alt="foto" />
                    <img src={menshirts4} alt="foto" />
                    <img src={bag8} alt="foto" />
                    <img src={bracelet3} alt="foto" />
                </div>
            </div>
            <Link to="/"> <li>Back to Home</li></Link>
        </div>


    );

}

export default Categorylist

