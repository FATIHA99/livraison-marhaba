import React from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { API_URL } from './../config'
import { isAunthenticated } from './../helpers/Auth';
import { useSelector } from 'react-redux';
import "./Nav.css";



const Navbar = () => {
    let countItem = useSelector(state => state.cart.count)

    const navigate = useNavigate()

    const signout = () => {

        axios.get(`${API_URL}/signout`)
            .then(() => {
                toast.success('Logout succefully !')

                localStorage.removeItem('jwt_info')
                navigate('/signin')
            })
            .catch()
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/product">Marhaba</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to={`${isAunthenticated() && isAunthenticated().user.role === 'admin' ? '/dash' : isAunthenticated() && isAunthenticated().user.role === 'livreur' ? '/livreur/dashboard' : ''}`}>Dashboard</Link>
                        </li>

                        {!isAunthenticated() && (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/signup'>Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/signin">Connexion</Link>
                                </li>
                            </>
                        )}
                        {isAunthenticated() && (
                            <li className="nav-item">
                                <Link className="nav-link" onClick={signout} >signout</Link>
                            </li>
                        )}
                    </ul>
                    <div class="me-5">
                        <Link to="/client/cart" class="position-relative">
                            <i class="bi text-black fa-solid bi-cart-fill"></i>
                            <span class="position-absolute  translate-middle badge rounded-pill bg-danger">
                                {countItem}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </nav>





    )
}

export default Navbar