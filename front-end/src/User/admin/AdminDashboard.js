import React from 'react';
import Navbar from '../admin/sideBar/navAdmin/navAdmin';
import { isAunthenticated } from '../../helpers/Auth';
import AddLivreur from './users/AddLivreur';
import Categorie from '../../User/admin/categorie/categorie';
import { NavLink,Outlet} from "react-router-dom";
import "./sideBar/side.css";
import Sidebar from './sideBar/Sidebar';
const AdminDashboard = () => {


    
    return (
        
        <main className="container-fluid bg-white">
            <div className="row d-flex flex-nowrap">
                <Sidebar/>



                <div className="col">
                    <div className="row">
                        <Navbar />
                    </div>
                    {/* <Categorie /> */}
                    <Outlet/>
                </div>

            </div>
        </main>

    )
}

export default AdminDashboard