import React, { useState } from 'react';
import { API_URL } from '../../../config';
import axios from 'axios';
import toastr from 'toastr';
import "toastr/build/toastr.css"





const AddLivreur = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword:''
    })

    const handleChange = (e) => {

        setUser({ ...user, [e.target.id]: e.target.value })

    }

    const addlivreur = e => {

        e.preventDefault();

        axios.post(`${API_URL}/addlivreur`, user, {
        })

            .then(() => {
                toastr.success('Creteded succefully !', {
                    // positionClass: "toastr-top",
                })

            })
            .catch(error => {
                if (error.response) {
                    toastr.warning(error.response.data.error, 'Please chek Form !', {
                        // positionClass: "toastr-top",
                    })
                }

            })

    }


    return (
 <div className='d-flex justify-content-center flex-column  '>
     <h1>Ajouter Livreur</h1>
        <form onSubmit={addlivreur} className="needs-validation w-50" >
            <div className=" mb-3 font-weight-bold">
                <label className="mb-2 fonts font-weight-bold" ><b>Username</b></label>
                <input onChange={handleChange} id="username" type="text" className="form-control rounded-0 border-dark" name="username" />

            </div>

            <div className="mb-3">
                <div className="mb-2 w-100">
                    <label className="fonts"><b>Email</b></label>
                </div>
                <input onChange={handleChange} id="email" type="email" className="form-control rounded-0 border-dark" name="email" />

            </div>

            <div className="mb-3">
                <div className="mb-2 w-100">
                    <label className="fonts"><b>Password</b></label>
                </div>
                <input onChange={handleChange} id="password" type="password" className="form-control rounded-0 border-dark" name="password" />

            </div>

            <div className="mb-3">
                <div className="mb-2 w-100">
                    <label className="fonts"><b>CONFIRM Password</b></label>
                </div>
                <input onChange={handleChange} type="password" className="form-control rounded-0 border-dark" name="confirmpassword" id="confirmpassword" />

            </div>

            <div className="d-flex align-items-center fonts pb-3">

                <button type="submit" value="Submit" className=" w-100 bg-black text-light b  py-2 px-4 rounded-0   ms-auto fonts  border-0 "  >
                    <b>CREER UN COMPTE</b>
                </button>
            </div>
            {/* {JSON.stringify(user)} */}
        </form>
        </div>
    )

}

export default AddLivreur