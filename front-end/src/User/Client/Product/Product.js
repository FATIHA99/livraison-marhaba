import { useState, useEffect } from 'react'
import axios from "axios";
import './Product.css';
import { API_URL } from "../../../config";
import Navbar from '../../../core/Navbar';
import { useDispatch } from 'react-redux';
import { addTocart } from '../actions/cartActions';

const Product = () => {

	const dispatch = useDispatch()

	const [data,setData] = useState([])
	const fetchall = () =>{
		axios.get(API_URL + '/repas')
		.then((e) => {
			setData(e.data)
		})		
	}

	useEffect(()=>{fetchall()}, [])

	return (
		<>
			<Navbar />

			<section class="section-products">
				<div class="container">
					<div class="row justify-content-center text-center">
						<div class="col-md-8 col-lg-6">
							<div class="header">
								<h3>Featured Product</h3>
								<h2>Popular Products</h2>
							</div>
						</div>
					</div>
					<div class="row">
							{data.map((repas)=>(
							<div class="col-md-6 col-lg-4 col-xl-3">
								<div id="product-1" class="single-product">
									<div style={{ background: `url("http://localhost:8080/images/${repas.image}") no-repeat center`, backgroundSize: 'cover', transition: 'all 0.3s;' }} class="part-1">
										<ul>
											<li onClick={()=>dispatch(addTocart(repas))}><i class="bi bi-cart-fill"></i></li>
											<li><i class="bi bi-heart-fill"></i></li>
											<li><i class="bi bi-plus-square-fill"></i></li>
											<li><i class="bi bi-arrows-angle-expand"></i></li>
										</ul>
									</div>
									<div class="part-2">
										<h3 class="product-title">{repas.name}</h3>
										<h4 class="product-old-price">{repas.price} Dhs</h4>
										<h4 class="product-price">{repas.price} Dhs</h4>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Product