import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { API_URL } from '../../config';
import axios from 'axios';
import {ToastContainer,toast} from "react-toastify";
import svg from '../../svg.gif'


const Signup = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    })

    const handleChange = (e) => {

        setUser({ ...user, [e.target.id]: e.target.value })

    }


    const submiSignup = e => {
        e.preventDefault();

        axios.post(`${API_URL}/signup`, user)

            .then(() => {
                toast.success('Creteded succefully chek your email to verfy your a compte!')
                navigate('/signin')
            })
            .catch((error) => {
                if (error.response) {
                    toast.warning(error.response.data.error, 'Please chek Form !')
                }

            })

    }

    return (

        <div className="container-lg mt-5">
            <h1>| MARHABA</h1>
            <div className="row d-flex justify-content-around bg-light shadow-lg border-0 ">
                <div className="col-lg-6 col-md-8 col-sm-10 mt-5 px-5  border-end " style={{backgroundColor:''}}>
                    <div className="text-center p-3">
                        <h3> Inscription </h3>
                    </div>
                    <form onSubmit={submiSignup} className="needs-validation">
                                <div className="mb-3 font-weight-bold pt-2">
                                    <label className="mb-2 fonts font-weight-bold" ><b>Username</b></label>
                                    <input onChange={handleChange} id="username" type="text" className="form-control " name="username" />
                                    <div className="invalid-feedback">
                                        Username is invalid
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="mb-2 w-100">
                                        <label className="fonts"><b>Email</b></label>
                                    </div>
                                    <input onChange={handleChange} id="email" type="email" className="form-control" name="email" />
                                    <div className="invalid-feedback">
                                        Email is Invalid
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="mb-2 w-100">
                                        <label className="fonts"><b>Password</b></label>
                                    </div>
                                    <input onChange={handleChange} id="password" type="password" className="form-control " name="password" />
                                </div>

                                <div className="mb-3">
                                    <div className="mb-2 w-100">
                                        <label className="fonts"><b>CONFIRM Password</b></label>
                                    </div>
                                    <input onChange={handleChange} id="confirmpassword" type="password" className="form-control " name="confirmpassword" />
                                </div>

                                <div className="d-flex align-items-center fonts pb-3">
                                    <button  style={{ background: "#FFC244"}} className=" w-100  text-light b  py-2 px-4 rounded-0   ms-auto fonts  border-0 ">
                                        <b>CREER UN COMPTE</b>
                                    </button>
                                </div>
                                {/* {JSON.stringify(user)} */}
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

export default Signup