import React, { useState } from 'react'
import { CardElement , useStripe , useElements } from '@stripe/react-stripe-js'
import axios from 'axios';
import { API_URL } from '../../../config';
import { ToastContainer, toast } from "react-toastify";
import "toastr/build/toastr.css";

function Totalchekouat({products}) {

    const totalTochekout = (products) => {
        return products.reduce((total, product)=>total + (product.count * product.price), 0)
    }

    const stripe = useStripe()
    const element = useElements()

    const [credentials, setCredentials] = useState({
        name:'',
        address:'',
        ville:'',
        Code_postale:'',
        telephone:''
        

    })
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('Pay');

    const handleChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    const handleCardChange = (e) => {
        if (e.error) return setError(e.error.message);
        setError('');
      };
    
    const handlePayment = async (e) => {

        e.preventDefault()
        const cardElement = element.getElement('card');
        const {name, address, ville,  phone} = credentials;
        const billingInfo = {
            name,
            phone,
            address: {
                line1: address,
                line2: ville,
            },
        };
        try{
            const paymentIntent = await  axios.post(`${API_URL}/payments`, {
                amount: totalTochekout(products)*100,
            })

            const paymentMethodObj = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: billingInfo,
            })



            const confirmedPayment = await stripe.confirmCardPayment(
                paymentIntent.data,
                {
                  payment_method: paymentMethodObj.paymentMethod.id,
                }
            );  

     


    
            setSuccess('Success! Payment is Complete');
            toast.success('PaymentSucceflly')


        }catch(err){
                  setError(error.message);
        }

    }



    return (
        <div>
                    { JSON.stringify(credentials) }
            <div className="shadow mt-4 pt-2 py-1 rounded px-3">
                <h3>TOTAL</h3>
                <hr />
                <div className="d-flex flex-row justify-content-between pt-3">
                    <div>
                        <p>Total des repas:</p>
                    </div>
                    <div>
                        <p>{totalTochekout(products)} dhs</p>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        <p>Frais de livraison:</p>
                    </div>
                    <div>
                        <p>100 dhs</p>
                    </div>
                </div>
                <hr />
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        <p><b>Total à payer:</b></p>
                    </div>
                    <div>
                        <h5>{totalTochekout(products)+ 100} dhs</h5>
                    </div>
                </div>
            </div>
            <div className="col px-4 pt-4 shadow py-2 rounded">
                    <div className="col">
                        <div className="fonts  ">
                            <h4 className="fw-bolder">Détails de facturation</h4>
                        </div>
                        <form method="POST" >
                            <div className="row mb-2">
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="mb-2 fonts font-weight-bold" htmlFor="email"><b>Username</b></label>
                                        <input type="text" id="form7Example1" className="form-control rounded-0 border-dark" name="name" onChange={handleChange} value={credentials.name}  />
                                    </div>
                                </div>
                            </div>
                            <div className="font-weight-bold mb-2">
                                <label className="mb-2 fonts font-weight-bold" htmlFor="email"><b>Adresse</b></label>
                                <input  type="text" className="form-control rounded-0 border-dark" name="address" onChange={handleChange} value={credentials.address}/>
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="mb-2 fonts font-weight-bold" htmlFor="email"><b>Ville</b></label>
                                        <input type="text" id="form7Example1" className="form-control rounded-0 border-dark" name="ville" onChange={handleChange} value={credentials.ville} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="mb-2 fonts font-weight-bold" htmlFor="email"><b>Code postale</b></label>
                                        <input type="text" id="form7Example1" className="form-control rounded-0 border-dark" name="Code_postale" onChange={handleChange} value={credentials.Code_postale}  />
                                    </div>
                                </div>
                            </div>
                            <div className="font-weight-bold mb-2">
                                <label className="mb-2 fonts font-weight-bold" htmlFor="email"><b>Téléphone</b></label>
                                <input type="text "className="form-control rounded-0 border-dark" name="telephone" onChange={handleChange} value={credentials.telephone} />
                            </div>
                            <p>{error}</p>
                            <CardElement  
                                    options={{
                                        hidePostalCode: true,
                                        style: {
                                            base: {
                                                fontSize: '20px',
                                            },
                                            invalid : {
                                                color: 'red',
                                            },
                                        }
                                    }}
                                    />
                            <div className="d-flex align-items-center fonts">
                                <button onClick={handlePayment} type="button"
                                    className=" w-100 text-black b mt-2 bg-warning  py-2 px-4 rounded-0   ms-auto fonts  border-0 ">
                                    <b>PASSER MA COMMANDE</b>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
        </div>
    )
}

export default Totalchekouat