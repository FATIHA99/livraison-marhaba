import React, { useState } from 'react';
import { API_URL } from '../../../config';
import axios from 'axios';
import {ToastContainer,toast} from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';





const AddLivreur = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    })

    const handleChange = (e) => {

        setUser({ ...user, [e.target.id]: e.target.value })

    }

    const addlivreur = e => {

        e.preventDefault();

        axios.post(`${API_URL}/addlivreur`, user, {
        })

            .then(() => {
                toast.success('Creteded succefully !', {
                    // positionClass: "toastr-top",
                    
                })
                navigate('/users')

            })
            .catch(error => {
                if (error.response) {
                    toast.warning(error.response.data.error, 'Please chek Form !')
                }

            })

    }


    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-md-8 mx-auto">
                    <div className="card">
                        <div className="card-header">ADD NEW LIVREUR</div>
                        <div className="card-body bg-light">
                            <Link to={'/users'} className="btn btn-sm btn-info"><i class="bi bi-house-door text-white"></i></Link>
                            <form method="POST">
                                <div className="form-group mt-3">
                                    <label>Username</label>
                                    <input type="text" onChange={handleChange} id="username" placeholder="username" className="form-control mt-3"/>
                                </div>
                                <div className="form-group mt-3">
                                    <label>Email</label>
                                    <input onChange={handleChange} id="email" type="email" placeholder='E-mail' className="form-control mt-3"/>
                                </div>
                                <div className="form-group mt-3">
                                    <label>password</label>
                                    <input onChange={handleChange} placeholder='password' id="password" type="password" className="form-control mt-3"/>
                                </div>
                                <div className="form-group mt-3">
                                    <label>confirm password</label>
                                    <input onChange={handleChange} placeholder='confirm password' className='form-control mt-3' type="password" id="confirmpassword"/>
                                </div>
                                <div className="form-group mt-4">
                                    <button type="submit" name="submit" onClick={addlivreur} className="btn btn-info text-white">Réservé</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )

}

export default AddLivreur