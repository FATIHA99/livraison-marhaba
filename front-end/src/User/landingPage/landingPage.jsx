import React from 'react'
import './landingPage.css'
import { Link } from 'react-router-dom'


import chef1 from './chef1.jpg'
import chef2 from './chef3.jpg'
import chef3 from './chef2.jpg'
import couscous from './couscous.jpg'
import gateaux from './gateaux.jpg'
import hamburger from './hamburger.jpg'
import coca from './coca.jpg'
import pepsi from './pepsi.jpg'
import fanta from './fanta.jpg'



function LandingPage() {
    return (
        <div>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-warning">| MARHABA</Link>
                    <form className="d-flex" role="search">
                        <Link className="btn btn-warning me-2" to='/signin' type="submit">Login</Link>
                        <Link className="btn btn-warning me-2" to='/signup' type="submit">register</Link>
                    </form>
                </div>
            </nav>

            {/* section 1 */}

            <div className=' d-flex '>
                <div  style={{backgroundColor:'black' }} className='col-6  vh-100 ps-5 d-flex justify-content-center flex-column ' >
                    <h2 className='fs-1 text-warning'> | MARHABA </h2>
                    <h3 className='text-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est harum dignissimos amet veniam incidunt ratione asperiores,
                        nesciunt quasi rerum exercitationem similique labore eligendi culpa reprehenderit praesentium aut delectus architecto ducimus.</h3>
                    <Link  style={{backgroundColor:''}}className='btn  btn-light m-5' to="">Login</Link>
                </div>
                <div   style={{backgroundColor:'black' }} className='col-6  d-flex justify-content-center align-items-center  img '>
                </div>
            </div>
            {/* section 2 */}
            <div className="container-fluid  py-5 mt-3">
                <h1 className='text-center m-3 text-dark '> notre proffessional chef </h1>
                <div className='container-fluid d-flex justify-content-center  mt-5 gap-5 '>
                    <div className="card  border-0  bg-dark col-3 card_chef" >
                        <img src={chef1} class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 class="card-title text-warning">John doe</h5>

                            <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className=" border-0  card col-3 bg-dark card_chef" >
                        <img src={chef2} class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 class="card-title text-warning">John doe</h5>
                            <p className="card-text text-light ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card  border-0 bg-dark col-3 card_chef" >
                        <img src={chef3} class="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 class="card-title text-warning">John doe</h5>

                            <p className="card-text text-light">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>


                </div>

            </div>
            {/* section 3  */}

            <h1 className='text-center m-3'> nos repas  </h1>
            <div className='container-fluid d-flex justify-content-center  mt-5 gap-5 '>
                <div className="card col-3" >
                    <img src={couscous} class="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 class="card-title">Baldi</h5>

                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card col-3" >
                    <img src={gateaux} class="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 class="card-title">Gateaux</h5>

                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card col-3" >
                    <img src={hamburger} class="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 class="card-title">Snack</h5>

                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>


            </div>
{/* section 4 */}
 <h1 className='text-center mt-4'> BOISSONS</h1>
<div className='container-fluid d-flex justify-content-center  mt-5 gap-5 '>
   
                <div className="card col-3" style={{'clip-path': 'circle(50% at 50% 50%)'}} >
                <img src={coca} class="card-img-top" alt="..."></img>
                </div>
                <div className="card col-3" style={{'clip-path': 'circle(50% at 50% 50%)'}} >
                <img src={fanta} class="card-img-top" alt="..."></img>
                </div>
                <div className="card col-3" style={{'clip-path': 'circle(50% at 50% 50%)'}}  >
                <img src={pepsi} class="card-img-top" alt="..."></img>
                </div>


            </div>
            {/* section 5  */}

            {/* <h1 className='text-center m-3'> nos Services   </h1>
            <div className='container-fluid d-flex justify-content-center  m-5 gap-5 '>
                <div className="col-8  livraison " >
      
                </div>

                <div className=" col-4" >
                    <h5> livraison a domicile </h5>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus odio omnis, eveniet tempora saepe animi deserunt! Accusamus quas inventore quos blanditiis mollitia natus distinctio unde ut deleniti, qui sed rem.</p>
                </div>
            </div> */}


            {/* FOOTER  */}
           


            <footer className="bg-dark text-center text-white">

                <div className="container p-4 pb-0">

                    <section className="mb-4">

                        <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button"><i className="bi bi-facebook"></i></Link>


                        <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button"><i className="bi bi-twitter"></i></Link>

                        <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button"><i className="bi bi-google"></i></Link>

                        <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button"><i className="bi bi-instagram"></i></Link>

                        <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button"><i className="bi bi-linkedin"></i></Link>

                        <Link className="btn btn-outline-light btn-floating m-1" to="#" role="button">
                            <i className="bi bi-github"></i>
                        </Link>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <Link className="text-white" href="">MDBootstrap.com</Link>
                </div>
            </footer>
        </div>
    )
}
export default LandingPage;