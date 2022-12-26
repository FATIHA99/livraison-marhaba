import React from 'react'
import order from "../image/order_image.png";

const Contact = () => {
  return (
        <main className="mt-5">
            <div className="container-fluid ">
                <h1 className="text-center fw-bolder" style={{color: "#F79F1F"}}>Order <span className="text-dark">Now</span></h1>
                <div className="row align-items-center pt-3">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                        <div>
                            <img width="100%" src={order} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                        <form method="POST">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mt-3">
                                    <input type="text" placeholder="Entrer votre name" className="form-control shadow"/>
                                </div>
                                <div className="mt-3 col">
                                    <input type="email" name="email" placeholder="E-mail" className="form-control shadow"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mt-3">
                                    <input type="text" placeholder="Entrer votre number" className="form-control shadow"/>
                                </div>
                                <div className="mt-3 col">
                                    <input type="text" placeholder="Subject" className="form-control shadow"/>
                                </div>
                            </div>
                            <div className="my-3">
                                <textarea name="message" rows="9" placeholder="your message" className="form-control shadow"></textarea>
                            </div>
                            <div className="text-center my-5">
                                <button type="submit" className="btn text-white shadow text-nowrap" style={{backgroundColor: "#F79F1F"}}>send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
  )
}

export default Contact