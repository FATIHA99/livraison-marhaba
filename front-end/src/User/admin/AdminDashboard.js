import React from 'react';
import Navbar from '../admin/sideBar/navAdmin/navAdmin';
import { isAunthenticated } from '../../helpers/Auth';
import AddLivreur from './users/AddLivreur';
import Categorie from '../../User/admin/categorie/categorie';
import { NavLink,Outlet} from "react-router-dom";
import "./sideBar/side.css";
import Sidebar from './sideBar/Sidebar';
const AdminDashboard = () => {

    const { user } = isAunthenticated()

    return (
        // <>
        // <Navbar/>
        // <div className="ms-3 mt-3">
        //     <h1>Dashboard Admin</h1>
        //     <h2>Username:   <b>{user.username}</b></h2>
        //     <h2>Email:   <b>{user.email}</b></h2>
        //     <h2>Role:   <b>{user.role}</b></h2>


        //     <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        //         <div className="modal-dialog modal-dialog-centered">
        //             <div className="modal-content">
        //                 <div className="modal-header">
        //                     <h1 className="modal-title fs-5  text-center" id="exampleModalToggleLabel">Create New Livreur</h1>
        //                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //                 </div>
        //                 <div className="modal-body">
        //                     <AddLivreur />

        //                 </div>

        //             </div>
        //         </div>
        //     </div>
        //     <a className="btn btn-dark" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Add livreur</a>
        // </div>
        // </>



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