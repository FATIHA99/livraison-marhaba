import React from 'react'
import { Link , useNavigate } from 'react-router-dom';
import Logo from "../image/logo.png";
import "./header.css";
import { useSelector } from 'react-redux';
import { isAunthenticated } from '../../../helpers/Auth';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { API_URL } from '../../../config'

const Header = () => {

  const navigate = useNavigate()
  let countItem = useSelector(state => state.cart.count)

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
    <header className="sticky-top d-flex justify-content-between bg-white shadow-lg p-2">
      <nav className="container-fluid d-flex align-items-center justify-content-between">
        <div>
          <Link className="nav-link"><img src={Logo} width="85px" /></Link>
        </div>
        <label htmlFor="men" id="toggel">&#9776;</label>
        <input type="checkbox" className="d-none" id="men" />
        <div className="menu text-center">
          <label htmlFor="men" id="toggel"><i className="bi bi-x-lg"></i></label>
          <Link className="text-dark">home</Link>
          <Link className="text-dark">show</Link>
          <Link className="text-dark">services</Link>
          <Link className="text-dark">review</Link>
          <Link className="text-dark fs-5" to="/client/cart"><i className="bi bi-cart2"></i>
            <span class="position-absolute  translate-middle badge rounded-pill bg-danger">
              {countItem}
            </span>
          </Link>
          {!isAunthenticated() && (
            <Link className="btn rounded-3 text-white border-bottom-0" to={"/signin"} style={{ backgroundColor: "#F79F1F" }}>Login</Link>
          )}
          {isAunthenticated() && (
            <Link onClick={signout}  className="btn rounded-3 text-white border-bottom-0" to={"/signin"} style={{ backgroundColor: "#F79F1F" }}>Signout</Link>
          )}
        </div>
      </nav>
      <ToastContainer />
    </header>
  )
}

export default Header