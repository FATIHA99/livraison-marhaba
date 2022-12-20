import React from 'react'
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./side.css";
import axios from 'axios';
import { API_URL } from '../../../config';
import toastr from 'toastr';
import { isAunthenticated } from '../../../helpers/Auth';
import img from "../images/pic-1.png";

const Sidebar = () => {
    const { user } = isAunthenticated()
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
        <>
            <input type="checkbox" id="menu" />
            <div style={{ background: "#ededed", minHeight: "100vh" }} id="sid" className="col-lg-2 col-md-3 col-sm-4 col-6 text-center">
                <label htmlFor="menu" id="label" className="btn float-end"><i className="bi bi-arrow-left-circle fs-3"></i></label>
                <h2 className="text-start">
                    <span className="text-info">| </span>Livraison
                </h2>
                <br />
                <img className="rounded rounded-circle w-50" src={img} />
                <h4>{user.username}</h4>
                <p className="text-info">{user.role}</p>
                <hr />
                <nav className="text-start p-2 ">
                    <NavLink className="nav-link p-2" to={"/dash"}>
                        <i className="bi bi-speedometer2 fs-5 me-2"></i>&nbsp;Dashboard
                    </NavLink>
                    <br />
                    <NavLink className="nav-link p-2" to={"/users"}>
                        <i className="bi bi-bookmark fs-5 me-2"></i>&nbsp;users
                    </NavLink>
                    <br />
                    <NavLink className="nav-link p-2" to={"/repas"}>
                        <i className="bi bi-grid fs-5"></i> &nbsp;&nbsp; repas
                    </NavLink>
                    <br />
                    <NavLink className="nav-link p-2" to={"/commands"}>
                        <i className="bi bi-cart2 fs-5 me-2"></i>&nbsp;commandes
                    </NavLink>
                    <br />
                    <NavLink className="nav-link p-2" to={"/categories"}>
                        <i className="bi bi-file-earmark-bar-graph fs-5 me-2"></i>&nbsp;&nbsp;Categories
                    </NavLink>
                    <br />
                    <NavLink className="nav-link p-2" to={"/client"}>
                        <i className="bi bi-person me-2 fs-5"></i> Client
                    </NavLink>
                    <br />
                </nav>
                <Link onClick={signout} to={"#"} className="nav-link p-1 pt-0">
                    <i className="bi bi-box-arrow-right me-2 fs-5"></i> Logout
                </Link>
            </div>
        </>
    )
}

export default Sidebar