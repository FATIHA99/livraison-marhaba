import React from 'react';
import Navbar from '../admin/sideBar/navAdmin/navAdmin';
import { isAunthenticated } from '../../helpers/Auth';
import {Outlet} from "react-router-dom";
import "../../User/admin/sideBar/side.css";
import Sidebar from '../../User/admin/sideBar/SidebarLivreur';
const LivreurDashboard = () => {
    const {  user } = isAunthenticated()
    return (
        
        <main className="container-fluid bg-white">
            <div className="row d-flex flex-nowrap">
                <Sidebar/>
                <div className="col">
                    <div className="row">
                        <Navbar />
                    </div>
                    <Outlet/>
                </div>

            </div>
        </main>
    )
}
export default LivreurDashboard
