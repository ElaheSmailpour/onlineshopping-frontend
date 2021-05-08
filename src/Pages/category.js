import { Link } from "react-router-dom"
import "./styles/category.css"
//import { useState } from 'react';

const Categorylist = () => {

    return (
        <div className="container">
            <nav>
                <div className="categorylist">
                    <Link>Children</Link>
                    <ul>
                        <Link><li>Tshirt</li></Link>
                        <Link><li>trousers</li></Link>
                        <Link> <li>blouse</li></Link>
                    </ul>
                </div>
                <div>
                    <Link>Women</Link>
                    <ul>
                        <Link><li>Tshirt</li></Link>
                        <Link><li>trousers</li></Link>
                        <Link> <li>blouse</li></Link>
                    </ul>

                </div>
                <div>
                    <Link>Men</Link>
                    <ul>
                        <Link><li>Tshirt</li></Link>
                        <Link><li>trousers</li></Link>
                        <Link> <li>suit</li></Link>

                    </ul>
                </div>
                <div>
                    <Link>Acessoires</Link>
                    <ul>
                        <Link><li>Ring</li></Link>
                        <Link><li>bracelet</li></Link>


                    </ul>
                </div>
                <div>
                    <Link>Toy</Link>
                    <ul>
                        <Link> <li>Dolls</li></Link>
                        <Link> <li>Figures</li></Link>
                        <Link> <li>Children Books</li></Link>
                    </ul>
                </div>

            </nav>
            
        </div>


    );

}

export default Categorylist

