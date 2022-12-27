import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "toastr/build/toastr.css";
import svg from '../../svg.gif'


const Signin = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {

        setUser({ ...user, [e.target.id]: e.target.value })

    }


    const submiSignin = e => {

        e.preventDefault();

        axios.post(`${API_URL}/signin`, user)

            .then((res) => {

                toast.success('Login succefully !')

                localStorage.setItem('jwt_info', JSON.stringify(res.data))
                if (res.data.user.role === "admin") {
                    navigate('/dash')
                }
                if (res.data.user.role === "livreur") {
                    navigate('/livreur/dashboard/commandes')
                }
                if (res.data.user.role === "client") {
                    navigate('/product')
                }

            })
            .catch(error => {
                if (error.response) {
                    toast.warning(error.response.data.error, 'Please chek Form !')
                }
            })
    }

    return (
        <div className="container-lg mt-5">
            <h1>| MARHABA</h1>
            <div className="row d-flex justify-content-around bg-light shadow-lg rounded-5">
                <div className="col-lg-6 col-md-8 col-sm-10 mt-5 border-end">
                    <div className="text-center p-3">
                        <h3>Login</h3>
                    </div>
                    <form onSubmit={submiSignin} className="needs-validation mx-4 mt-3">
                        <div className="mb-3 font-weight-bold pt-2">
                            <label className="mb-2 font-weight-bold" htmlFor="email"><b>Email</b></label>
                            <input onChange={handleChange} placeholder='E-mail' id="email" type="email" className="form-control" name="email" />
                            <div className="invalid-feedback">
                                Email is invalid
                            </div>
                        </div>

                        <div className="my-3 pt-3">
                            <div className="mb-2 w-100 d-flex flex-row justify-content-between">
                                <label className="" htmlFor="password"><b>Password</b></label>
                                <Link className="text-secondary" to="/forgetpassword">Forget password</Link>
                            </div>
                            <input onChange={handleChange} id="password" placeholder='password' type="password" className="form-control" name="password" />
                        </div>

                        <div className="d-flex align-items-center justify-content-end pt-3">
                            <button  style={{backgroundColor:'#FFC727'}}type="submit" className="btn w-25 text-dark">Login</button>
                        </div>
                        <div className=''>
                            <Link className="text-secondary" to="/signup">Create account</Link>
                        </div>
                    </form>
                </div>
                <div className='col-lg-6 col-md col-sm-10 text-center p-5'> 
                    <img src={svg}></img>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Signin