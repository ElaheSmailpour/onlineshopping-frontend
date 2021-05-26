import { Link } from "react-router-dom"
import "./styles/category.scss"
import React from 'react';

const Categorylist = () => {

    return (
        <div className="category-container">
            <nav>
                <div className="categorylist">
                    <Link>Children</Link>
                    <ul>
                        <Link><li>shirt</li></Link>
                        <Link> <li>dress</li></Link>
                    </ul>
                </div>

                <div>
                    <Link>Men</Link>
                    <ul>
                        <Link><li>shirt</li></Link>
                        <Link> <li>dress</li></Link>

                    </ul>
                </div>
                <div>
                    <Link>Accesories</Link>
                    <ul>
                        <Link to="/ProductListCategory/60994aca5c079d1905146394"><li>jewelry</li></Link>
                      


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

            <button className="btn btn-outline-success">  <i className="fa fa-fw fa-search fa-5"></i>
                <input className="form-control" type="text" placeholder="Search" />
            </button>
            <Link to="/"> <li>Back to Home</li></Link>
        </div>


    );

}

export default Categorylist

