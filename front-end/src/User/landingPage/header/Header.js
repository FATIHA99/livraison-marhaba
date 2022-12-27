import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../image/logo.png";
import "./header.css";

const Header = () => {
  return (
    <header className="sticky-top d-flex justify-content-between bg-white shadow-lg p-2">
        <nav className="container-fluid d-flex align-items-center justify-content-between">
            <div>
                <Link className="nav-link"><img src={Logo} width="85px"/></Link>
            </div>
            <label htmlFor="men" id="toggel">&#9776;</label>
            <input type="checkbox" className="d-none" id="men"/>
            <div className="menu text-center">
                <label htmlFor="men" id="toggel"><i className="bi bi-x-lg"></i></label>
                <Link className="text-dark">home</Link>
                <Link className="text-dark">packages</Link>
                <Link className="text-dark">show</Link>
                <Link className="text-dark">services</Link>
                <Link className="text-dark">review</Link>
                <Link className="text-dark fs-5"><i className="bi bi-cart2"></i></Link>                
                <Link className="btn rounded-3 text-white border-bottom-0" to={"/signin"} style={{backgroundColor: "#F79F1F"}}>Se connecter</Link>
            </div>
        </nav>
    </header>
  )
}

export default Header