import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from 'axios'
import { API_URL } from '../../../config'
import {ToastContainer,toast} from "react-toastify";
import "toastr/build/toastr.css";

function User() {
    const [delivery, setDelivery] = useState([]);
    const fetchDelivery = async () => {
        const all = await axios.get(`${API_URL}/DisplayDelivery`);
        setDelivery(all.data)
    }

    useEffect(() => {
        fetchDelivery()
    }, [])

    function Delete(event, id) {
        event.preventDefault()
        axios.delete(`${API_URL}/DeleteDelivery/${id}`)
            .then((res) => {
                window.location.reload(false);
                toast.success('livreur supprimé')
            })

    }

    return (
        <div>
            <h1> Users </h1>
            <Link to='/AddLivreur' className="btn btn-warning m-3 " >Ajouter livreur</Link>
            <div style={{ width: "99%", margin: "auto" }} className="row overflow-auto">
                <table className="table table-bordered" id="myTable">
                    <thead>
                        <tr style={{ color: "#acacac" }}>
                            <th scope='col'>image</th>
                            <th scope="col">name</th>
                            <th scope="col">email</th>
                            <th className="text-center">operation</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {delivery.map((delivery) => (
                            <tr key={delivery._id} className="align-middle">
                                <th scope="row">1</th>
                                <th scope="row">{delivery.username}</th>
                                <td>{delivery.email}</td>
                                <td className="d-flex flex-row justify-content-end">
                                    <form action="" method="post">
                                        <button className="btn btn-outline-danger" onClick={(e) => Delete(e, delivery._id)}><i className="bi bi-trash"></i></button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <ToastContainer/>
        </div>
    )
}
export default User