import React from 'react'
import { NavLink , useNavigate , Link } from "react-router-dom";
import "./side.css";
import axios from 'axios';
import { API_URL } from '../../../config';
import {ToastContainer,toast} from "react-toastify";
import { isAunthenticated } from '../../../helpers/Auth';

const Sidebar = () => {
const { user } = isAunthenticated()
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
    <>
        <input type="checkbox" id="menu" />
        <div style={{ background: "#EDEDED", minHeight: "100vh" }} id="sid" className="col-lg-2 col-md-4 col-sm-5 col-8 text-center">
            <label htmlFor="menu" id="label" className="btn float-end"><i className="bi bi-arrow-left-circle fs-3"></i></label>
            <h2 className="text-start text-dark"><span className="text-warning">[</span>Livraison</h2>
            <br />
            <img className="rounded rounded-circle w-50" src={require("../images/pic-1.png")} />
            <h4>{user.username}</h4>
            <p className="text-info">{user.role}</p>
            <hr />
            <nav className="text-start p-2">
            
                <NavLink className="nav-link p-2" to={"/livreur/dashboard/commandes"}>
                    <i className="bi bi-cart2 fs-5 me-2"></i>&nbsp;commandes
                </NavLink>
                
            </nav>
            <Link  onClick={signout} to={"#"} className="nav-link p-1">
                <i className="bi bi-box-arrow-right me-2 fs-5"></i> Logout
            </Link>
        <ToastContainer/>
        </div>
    </>
  )
}

export default Sidebar