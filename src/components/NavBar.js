import React, {useState} from 'react';
import '../App.css';
import {
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <div className='logo'>
                <h1 className='logo-thrifty'>Thrifty Native</h1>
                {/* <h1 className='logo-native'>Native</h1> */}
            </div>
            <ul className='nav-link-container'>
                <li className='nav-link'>
                    <Link to="/" >Home</Link>
                </li>
                <li className='nav-link'>
                    <Link to="/products" >Products</Link>
                </li>
                <li className='nav-link'>
                    <Link to="/about" >About</Link>
                </li>
            </ul>
        </nav>
    )
}