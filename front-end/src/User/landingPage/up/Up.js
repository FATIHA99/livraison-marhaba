import React from 'react'
import { Link } from 'react-router-dom';
import Main from "../image/main_img.png";
import Fplat from "../image/Food-Plate.png";

const Up = () => {
  return (
    <>
        <main className="mt-5">
            <div className="container-lg">
                <div className="row align-items-center pt-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <div>
                            <img width="100%" src={Main} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                        <h1>Get Fresh <span style={{color: "#F79F1F"}}>FOOD </span>in a Easy Way</h1>
                        <Link title="logout"><h2>client</h2></Link>
                        <div>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, minima architecto illum nam, temporibus quia qui eum enim quasi dignissimos quas iste alias eos dolore atque nihil repellat culpa officia!</h3>
                            <Link className="btn text-white mt-5" style={{background: "#F79F1F;"}}>Login here</Link>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
        </main>
        <main className="mt-5">
            <div className="container-lg">
                <div className="row align-items-center pt-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                        <h1 style={{color: "#F79F1F"}}>About<span className="text-dark"> US</span></h1>
                        <h2 className="mt-5">Why Choose us?</h2>
                        <div className="mt-5">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, minima architecto illum nam, temporibus quia qui eum enim quasi dignissimos quas iste alias eos dolore atque nihil repellat culpa officia!</h3>
                            <Link className="btn text-white mt-5" style={{background: "#F79F1F"}}>Order Now</Link>
                        </div>
                        <hr/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <div>
                            <img width="100%" src={Fplat} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Up