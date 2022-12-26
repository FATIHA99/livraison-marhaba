import React from 'react'
import review_1 from "../image/review_1.png";
import review_2 from "../image/review_2.png";
import review_3 from "../image/review_3.png";
import review_4 from "../image/review_4.png";
import G1 from "../image/gallary_1.jpg";
import G2 from "../image/gallary_2.jpg";
import G3 from "../image/gallary_3.jpg";
import G4 from "../image/gallary_4.jpg";
import G5 from "../image/gallary_5.jpg";
import G6 from "../image/gallary_6.jpg";

const Review = () => {
  return (
      <>
        <div className="container-fluid mt-4">
            <h1 className="text-center fw-bolder">Our <span style={{color: "#F79F1F"}}>Gallary</span></h1>
            <div className="overflow-auto mt-3">
                <div className="col-12 d-flex gap-2">
                    <img src={G1} />
                    <img src={G2} />
                    <img src={G3} />
                    <img src={G4} />
                    <img src={G5} />
                    <img src={G6} />
                </div>
            </div>
        </div>
        <div className="container-fluid mt-5">
            <h1 className="text-center fw-bolder">Customer <span style={{color: "#F79F1F"}}>Review</span></h1>
            <div className="p-3 mt-3">
                <div className="d-flex overflow-auto gap-5">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-10 shadow-lg p-2 mb-3 rounded-3">
                        <img src={review_1} className="rounded-circle mx-auto d-block" width="100px"/>
                        <h3 className="text-center">John Doe</h3>
                        <p className="mt-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt consequatur reprehenderit quo nulla eaque vitae facilis nemo ipsa corporis harum voluptatum nostrum molestias, aspernatur, nihil dolor eveniet quis aut.</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-10 shadow-lg p-2 mb-3 rounded-4">
                        <img src={review_2} className="rounded-circle mx-auto d-block" width="100px"/>
                        <h3 className="text-center">John Doe</h3>
                        <p className="mt-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt consequatur reprehenderit quo nulla eaque vitae facilis nemo ipsa corporis harum voluptatum nostrum molestias, aspernatur, nihil dolor eveniet quis aut.</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-10 shadow-lg p-2 mb-3 rounded-4">
                        <img src={review_3} className="rounded-circle mx-auto d-block" width="100px"/>
                        <h3 className="text-center">John Doe</h3>
                        <p className="mt-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt consequatur reprehenderit quo nulla eaque vitae facilis nemo ipsa corporis harum voluptatum nostrum molestias, aspernatur, nihil dolor eveniet quis aut.</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-10 shadow-lg p-2 mb-3 rounded-4">
                        <img src={review_4} className="rounded-circle mx-auto d-block" width="100px"/>
                        <h3 className="text-center">John Doe</h3>
                        <p className="mt-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga incidunt consequatur reprehenderit quo nulla eaque vitae facilis nemo ipsa corporis harum voluptatum nostrum molestias, aspernatur, nihil dolor eveniet quis aut.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Review