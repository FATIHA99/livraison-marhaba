import React from "react";
import { Link } from "react-router-dom"
function User() {
    return (
        <div>
            <h1> Users </h1>
            <Link to='/AddLivreur' className="btn btn-warning m-3 " >Ajouter livreur</Link>
            <div style={{width: "99%", margin: "auto"}} className="row overflow-auto">
                        <table className="table table-bordered" id="myTable">
                            <thead>
                                <tr style={{color: "#acacac"}}>
                                    <th scope='col'>image</th>
                                    <th scope="col">name</th>
                                    <th scope="col">email</th>
                                    <th className="text-center">operation</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr className="align-middle">
                                    <th scope="row">1</th>
                                    <th scope="row">john</th>
                                    <td>lmalik </td>
                                    <td className="d-flex flex-row justify-content-end">
                                        <form action="" method="post">
                                            <button className='btn btn-outline-info me-1'><i class="bi bi-pencil-square"></i></button>
                                            <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                                        </form>
                                    </td>
                                </tr>
                               
                            </tbody>
                        </table>
                    </div>
        </div>
    )
}
export default User