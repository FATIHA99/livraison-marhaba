import React from 'react'
import { NavLink } from "react-router-dom";
import "./side.css";

const Sidebar = () => {
  return (
    <>
        <input type="checkbox" id="menu" />
        <div style={{ background: "#ededed", minHeight: "100vh" }} id="sid" className="col-lg-2 col-md-4 col-sm-5 col-8 text-center">
        <label for="menu" id="label" className="btn float-end"><i className="bi bi-arrow-left-circle fs-3"></i></label>
        <h2 className="text-start text-dark"><span className="text-warning">[</span>Livraison</h2>
        <br />
        <img className="rounded rounded-circle w-50" src={require("../images/pic-1.png")} />
        <h4>name</h4>
        <p className="text-info">Admin</p>
        <hr />
        <nav className="text-start p-2">
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
            <NavLink className="nav-link p-2" to={"/settings"}>
                <i className="bi bi-sliders me-3"></i> Settings
            </NavLink>
            <br />
        </nav>
        <NavLink to={"/logout"} className="nav-link p-1">
            <i className="bi bi-box-arrow-right me-2 fs-5"></i> Logout
        </NavLink>
    </div>
    </>
  )
}

export default Sidebar