import React, {useState} from 'react';
import '../App.css';
import {
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default function NavBar() {
    return (
        <div className='nav-container'>
            <nav className='nav-bar'>
                <h1>Thrifty Native(logo)</h1>
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/products" >Products</Link>
                    </li>
                    <li>
                        <Link to="/about" >About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}