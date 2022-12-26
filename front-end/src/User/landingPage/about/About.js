import React from 'react'
import Chef1 from "../image/chef1.png";
import Chef2 from "../image/chef2.png";
import Chef3 from "../image/chef3.jpg";

const About = () => {
  return (
        <div className="mt-4">
            <h1 className="text-center fw-bolder">Our <span style={{color: "#F79F1F"}}>Team</span></h1>
            <div className="container-fluid row p-3 mx-auto">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="card shadow p-2 mb-5 rounded text-center" style={{minWidth: "240px"}}>
                        <div className="p-2">
                            <img src={Chef1} className="rounded-circle" width="200px" alt=""/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title fw-bolder text-warning">Chef</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="card shadow p-2 mb-5 rounded text-center" style={{minWidth: "240px"}}>
                        <div className="p-2">
                            <img src={Chef2} className="rounded-circle" width="200px" alt=""/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title fw-bolder text-warning">Chef</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="card shadow p-2 mb-5 rounded text-center" style={{minWidth: "240px"}}>
                        <div className="p-2">
                            <img src={Chef3} className="rounded-circle" width="200px" alt=""/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title fw-bolder text-warning">Chef</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="card shadow p-2 mb-5 rounded text-center" style={{minWidth: "240px"}}>
                        <div className="p-2">
                            <img src={Chef2} className="rounded-circle" width="200px" alt=""/>
                        </div>
                        <div className="card-body">
                            <h3 className="card-title fw-bolder text-warning">Chef</h3>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
  )
}

export default About