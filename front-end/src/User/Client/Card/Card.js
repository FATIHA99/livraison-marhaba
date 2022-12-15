import React, {useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../../config';



const Card = () => {
    
    const [commande, setCommande] = useState({
        username:'',
        adresse:'',
        ville:'',
        Code_postale:'' ,
        telephone:'',
        repas:'',
        quantity:'',
        total:'',
    })

    const handleChange = (e) => {
        setCommande({...commande, [e.target.id]: [e.target.value]})
    }


    return (

        <main className="container">
            <div className=" d-flex flex-row justify-content-around mt-5">
                <div className="col-6">
                    <h1>Mon Panier</h1>
                    <div>
                        <table className="table align-middle mb-0 bg-white mt-3">
                            <thead className="bg-white border-0">
                                <tr>
                                    <th>Repas</th>
                                    <th>Quantité</th>
                                    <th>Sous-Totale</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img src="image/femme1.png" alt="" style={{width: "45px", Height: "45px"}} className="rounded-circle" />
                                            <div className="ms-3">
                                                <p className="fw-bold mb-1">Repas</p>
                                                <p className="text-muted mb-0">150 Dhs</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="quantity">
                                            <input className="text-center py-1 rounded-0 ps-3 border-0" type="number" min="1" max="9" step="1" value="1" />
                                        </div>
                                    </td>
                                    <td>
                                        <p className="pt-3 ps-3">150</p>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-link btn-sm btn-rounded ps-4">
                                            <i className="fa-solid text-secondary fa-trash-can" style={{FontSize: "1.4rem"}}></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="shadow mt-4 pt-2 py-1 rounded px-3">
                        <h3>TOTAL</h3>
                        <hr />
                        <div className="d-flex flex-row justify-content-between pt-3">
                            <div>
                                <p>Total des repas:</p>
                            </div>
                            <div>
                                <p>250 dhs</p>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <div>
                                <p>Frais de livraison:</p>
                            </div>
                            <div>
                                <p>0 dhs</p>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex flex-row justify-content-between">
                            <div>
                                <p><b>Total à payer:</b></p>
                            </div>
                            <div>
                                <h5>0 dhs</h5>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-4 px-4 pt-4 shadow py-2 rounded">
                    <div className="col">
                        <div className="fonts  ">
                            <h4 className="fw-bolder">Détails de facturation</h4>
                        </div>
                        <form method="POST" >
                            <div className="row mb-2">
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="mb-2 fonts font-weight-bold" for="email"><b>Username</b></label>
                                        <input type="text" id="form7Example1" className="form-control rounded-0 border-dark" />
                                    </div>
                                </div>
                            </div>
                            <div className="font-weight-bold mb-2">
                                <label className="mb-2 fonts font-weight-bold" for="email"><b>Adresse</b></label>
                                <input id="email" type="email" className="form-control rounded-0 border-dark" name="email"
                                    value="" required autofocus />
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="mb-2 fonts font-weight-bold" for="email"><b>Ville</b></label>
                                        <input type="text" id="form7Example1" className="form-control rounded-0 border-dark" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="mb-2 fonts font-weight-bold" for="email"><b>Code postale</b></label>
                                        <input type="text" id="form7Example1" className="form-control rounded-0 border-dark" />
                                    </div>
                                </div>
                            </div>
                            <div className="font-weight-bold mb-2">
                                <label className="mb-2 fonts font-weight-bold" for="email"><b>Téléphone</b></label>
                                <input id="email" type="email" className="form-control rounded-0 border-dark" name="email"
                                    value="" required autofocus />
                            </div>
                            <div className="d-flex align-items-center fonts">
                                <button type="button"
                                    className=" w-100 text-black b mt-2 bg-warning  py-2 px-4 rounded-0   ms-auto fonts  border-0 ">
                                    <b>PASSER MA COMMANDE</b>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>

    )
}


export default Card