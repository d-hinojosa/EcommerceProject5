import React from 'react';
import {A} from 'hookrouter';
import navIcon from '../../Assets/Img/rings.png';

function Navbar() {

    
    return(
        <div className="topnav">
            <div className="topnav-right">
                <a className="navbar-brand" href="#">
                    <img src={navIcon} width="35" height="35" className="d-inline-block align-top" alt="gold rings icon"/>
                    WONDERLUST
                </a>
                <A className="active" href="/">Home</A>
                <a href="/Products">Products</a>
                <a href="/Contact">Contact Us</a>
            <span className="social">
                <a href="twitter"><i className="fab fa-twitter"></i></a>
                <a href="fb"><i className="fab fa-facebook-f"></i></a>
                <a href="insta"><i className="fab fa-instagram"></i></a>
            </span>
            </div>
        </div>
    )
}
export default Navbar;