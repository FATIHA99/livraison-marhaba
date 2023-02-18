import React from 'react';
import { incProductCount, decProductCount, removeProduct } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import Totalchekouat from './Totalchekouat';
import './card.css';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Header from '../../landingPage/header/Header';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)

const Card = () => {
    const productsInCart = useSelector(state => state.cart.products)
    const dispatch = useDispatch()


    return (

        <Elements stripe={stripePromise}>
            <Header />
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
                                    {productsInCart.map((product, index) => (
                                        <tr key={product.id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <img src={`http://localhost:8080/images/${product.image}`} alt="" style={{ width: "50px" }} className="rounded" />
                                                    <div className="ms-3">
                                                        <p className="fw-bold mb-1">{product.name}</p>
                                                        <p className="text-muted mb-0">{product.price} Dhs</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="quantity d-flex align-items-center justify-content-center">
                                                    {product.count > 1 && (
                                                        <span onClick={() => dispatch(decProductCount(product))} class="quantity__minus"><span>-</span></span>
                                                    )}
                                                    <span className='px-4'>{product.count}</span>
                                                    <span onClick={() => dispatch(incProductCount(product))} className="quantity__plus"><span>+</span></span>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="pt-3 ps-3">{product.count * product.price} Dhs</p>
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-link btn-sm btn-rounded ps-4">
                                                    <i onClick={() => dispatch(removeProduct(product._id))} className="fa-solid text-secondary fs-5 bi bi-trash3-fill" style={{ FontSize: "1.4rem" }}></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Totalchekouat products={productsInCart} />
                    </div>



                </div>
            </main>
        </Elements>

    )
}


export default Card