import React from 'react'
import {Link,NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css"
import { API_URL } from './../config'
import { isAunthenticated } from './../helpers/Auth'
import "./Nav.css";



const Navbar = (props) => {

    const navigate = useNavigate()

    const signout = () => {

        axios.get(`${API_URL}/signout`)
            .then(() => {
                toastr.success('Logout succefully !', {
                    positionClass: "toastr-bottom"
                })

                localStorage.removeItem('jwt_info')
                navigate('/signin')
            })
            .catch()
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Home</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <NavLink className="nav-link" to={`${isAunthenticated() && isAunthenticated().user.role === 'admin' ? '/admin' : isAunthenticated() && isAunthenticated().user.role === 'livreur' ? '/livreur' : ''}/dashboard`}>Dashboard</NavLink>
                        </li>

                        {!isAunthenticated() && (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/signup'>Register</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink  className="nav-link" to="/signin">Connexion</NavLink>
                                </li>
                            </>
                        )}
                        {isAunthenticated() && (
                            <li className="nav-item">
                                <Link  className="nav-link" onClick={signout} >signout</Link>
                            </li>
                        )}

                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar