import React from 'react';
import  './navbar.css';
import logo from '../img/logo (2).png';

const Navbar = () => {
    return ( 
        <div className="Navbar">
            <div className="nav">
                <img src={logo}/>
            </div>
        </div>
     );
}
 
export default Navbar;