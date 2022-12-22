import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { API_URL } from './../config'
import { isAunthenticated } from './../helpers/Auth';
import { useSelector } from 'react-redux';
import "./Nav.css";



const Navbar = (props) => {
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
                <NavLink className="navbar-brand" to="/">Home</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <NavLink className="nav-link" to={`${isAunthenticated() && isAunthenticated().user.role === 'admin' ? '/dash' : isAunthenticated() && isAunthenticated().user.role === 'livreur' ? '/livreur/dashboard' : ''}`}>Dashboard</NavLink>
                        </li>

                        {!isAunthenticated() && (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/signup'>Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/signin">Connexion</NavLink>
                                </li>
                            </>
                        )}
                        {isAunthenticated() && (
                            <li className="nav-item">
                                <NavLink className="nav-link" onClick={signout} >signout</NavLink>
                            </li>
                        )}
                    </ul>
                    <div class="me-5">
                        <NavLink to="/client/cart" class="position-relative">
                            <i class="bi text-black fa-solid bi-cart-fill"></i>
                            <span class="position-absolute  translate-middle badge rounded-pill bg-danger">
                                {countItem}
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </nav>





    )
}

export default Navbar