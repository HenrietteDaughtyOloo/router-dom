import React from "react";
import './style.css'

const Navbar =()=>{
    return(
        <div>
            <nav>
                <ul>
                    <li><a href="/Login">Log in </a></li>
                    <li><a href="/products"> Products</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar