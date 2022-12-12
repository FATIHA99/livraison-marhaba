import React from 'react'
import Sidebar from '../sideBar/Sidebar'
import Nava from "../sideBar/navAdmin/navAdmin";

const Dashboard = () => {
  return (
    <main className="container-fluid bg-white">
        <div className="row d-flex flex-nowrap">
            <Sidebar/>
            <div className="col">
                <div className="row">
                    <Nava/>
                    <div className="container-fluid">
                        <div className="row mt-5">
                            <div className="col-md col-sm-6 p-2">
                                <div className="p-2" style={{background: "#badff8",borderRadius: "6px"}}>
                                    <i className="bi bi-grid fs-3" style={{color: "#31a2e4"}}></i>
                                    <p>Repas</p>
                                    <p className="text-end fw-bold fs-5">12</p>
                                </div>
                            </div>
                            <div className="col-md col-sm-6 p-2">
                                <div className="p-2" style={{background: "#ee94cb",borderRadius: "6px"}}>
                                    <i className="bi bi-file-earmark-bar-graph fs-3" style={{color: "#f33d9e"}}></i>
                                    <p>Categories</p>
                                    <p className="text-end fw-bold fs-5">10</p>
                                </div>
                            </div>
                            <div className="col-md col-sm-6 p-2">
                                <div className="p-2 text-white" style={{background: "#FF8303",borderRadius: "6px"}}>
                                    <i className="bi bi-cart2 fs-3"></i>
                                    <p>commandes</p>
                                    <p className="text-end fw-bold fs-5">9</p>
                                </div>
                            </div>
                            <div className="col-md col-sm-6 p-2">
                                <div className="p-2 text-white" style={{background: "linear-gradient(90deg, rgb(168, 163, 218) 0%, rgb(252, 166, 38) 100%)",borderRadius: "6px"}}>
                                    <i className="bi bi-person fs-3"></i>
                                    <p>Users</p>
                                    <p className="text-end fw-bold fs-5">9</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Dashboard