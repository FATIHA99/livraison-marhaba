import React from 'react'
import NavAdmin from '../sideBar/navAdmin/navAdmin.jsx';
import Sidebar from '../sideBar/Sidebar'
import AddRepas from './AddRepas.jsx';

const Repas = () => {
  return (
    <main className="container-fluid bg-white">
        <div className="row d-flex flex-nowrap">
            <Sidebar/>
            <div className="col">
                <div className="row">
                   <NavAdmin/>
                </div>
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-md d-flex justify-content-between">
                            <div className="">
                                <h3>Livreur List</h3>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">ADD NEW LIVREUR</button>
                                <AddRepas/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div style={{width: "99%", margin: "auto"}} className="row overflow-auto">
                        <table className="table table-bordered" id="myTable">
                            <thead>
                                <tr style={{color: "#acacac"}}>
                                    <th scope="col">name</th>
                                    <th scope="col">commentair</th>
                                    <th className="text-center">operation</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr className="align-middle">
                                    <th scope="row"> 1</th>
                                    <th scope="row">john</th>
                                    <td>lmalik </td>
                                    <td className="d-flex flex-row justify-content-end">
                                        <form action="" method="post">
                                            <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                                        </form>
                                    </td>
                                </tr>
                                <tr className="align-middle">
                                    <th scope="row"> 1</th>
                                    <th scope="row">john</th>
                                    <td>lmalik </td>
                                    <td className="d-flex flex-row justify-content-end">
                                        <form action="" method="post">
                                            <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                                        </form>
                                    </td>
                                </tr>
                                <tr className="align-middle">
                                    <th scope="row"> 1</th>
                                    <th scope="row">john</th>
                                    <td>lmalik </td>
                                    <td className="d-flex flex-row justify-content-end">
                                        <form action="" method="post">
                                            <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                                        </form>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Repas