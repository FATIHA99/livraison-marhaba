import React from 'react';
import { incProductCount, decProductCount, removeProduct } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import Totalchekouat from './Totalchekouat';
import './card.css'



const Card = () => {
    const productsInCart = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    // const [commande, setCommande] = useState({
    //     username:'',
    //     adresse:'',
    //     ville:'',
    //     Code_postale:'' ,
    //     telephone:'',
    //     repas:'',
    //     quantity:'',
    //     total:'',
    // })

    // const handleChange = (e) => {
    //     setCommande({...commande, [e.target.id]: [e.target.value]})
    // }


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
                                {productsInCart.map((product, index) => (
                                    <tr key={product.id}>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <img src="image/femme1.png" alt="" style={{ width: "45px", Height: "45px" }} className="rounded-circle" />
                                                <div className="ms-3">
                                                    <p className="fw-bold mb-1">{product.name}</p>
                                                    <p className="text-muted mb-0">{product.price} Dhs</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="quantity d-flex align-items-center justify-content-center">
                                                <span onClick={()=>dispatch(decProductCount(product))} class="quantity__minus"><span>-</span></span>
                                                <span className='px-4'>{product.count}</span>
                                                <span onClick={()=>dispatch(incProductCount(product))}  className="quantity__plus"><span>+</span></span>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="pt-3 ps-3">{product.count * product.price} Dhs</p>
                                        </td>
                                        <td>
                                            <button  type="button" className="btn btn-link btn-sm btn-rounded ps-4">
                                                <i onClick={()=>dispatch(removeProduct(product._id))} className="fa-solid text-secondary fs-5 bi bi-trash3-fill" style={{ FontSize: "1.4rem" }}></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <Totalchekouat products={productsInCart} />
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
                                        <label className="mb-2 fonts font-weight-bold" htmlFor="email"><b>Username</b></label>
                                        <input type="text" id="form7Example1" className="form-control rounded-0 border-dark" />
                                    </div>
                                </div>
                            </div>
                            <div className="font-weight-bold mb-2">
                                <label className="mb-2 fonts font-weight-bold" htmlFor="email"><b>Adresse</b></label>
                                <input id="email" type="email" className="form-control rounded-0 border-dark" name="email"
                                    value="" required autofocus />
                            </div>
                            <div className="row mb-2">
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="mb-2 fonts font-weight-bold" htmlFor="email"><b>Ville</b></label>
                                        <input type="text" id="form7Example1" className="form-control rounded-0 border-dark" />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-outline">
                                        <label className="mb-2 fonts font-weight-bold" htmlFor="email"><b>Code postale</b></label>
                                        <input type="text" id="form7Example1" className="form-control rounded-0 border-dark" />
                                    </div>
                                </div>
                            </div>
                            <div className="font-weight-bold mb-2">
                                <label className="mb-2 fonts font-weight-bold" htmlFor="email"><b>Téléphone</b></label>
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