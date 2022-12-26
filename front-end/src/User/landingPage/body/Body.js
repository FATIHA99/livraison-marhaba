import {useEffect,useState} from 'react'
import buger from "../image/buger.jpg";
import { API_URL } from "../../../config";
import axios from "axios";

const Body = () => {
    const [data, setData] = useState([])
    const fetchRepas = () => {
        axios.get(API_URL+'/repas').then((e)=>{
            setData(e.data)
        })
      }
      
      useEffect(() => {
        fetchRepas()
      }, [])

  return (
    <div className="mt-4">
        <h1 className="text-center fw-bolder">Our <span style={{color: "#F79F1F"}}>Menu</span></h1>
        <div className="container-fluid row d-flex mt-3 p-3 justify-content-center">
            {data.map(e=>(

           
            <div className="col-lg-3 col-md-4 col-sm-6 mx-auto">
                <div className="card shadow p-1 mb-5 rounded" style={{maxHeight: "500px"}}>
                    <img src={e.image ? 'http://localhost:8080/images/'+e.image:''} className="card-img-top rounded-3" style={{height: "220px"}}/>
                    <div className="card-body">
                        <h5 className="card-title fs-3">{e.name} <span className="text-secondary fs-5 fw-lighter">{e.price}</span></h5>
                        <p className="card-text">{e.description}</p>
                        <form method="POST" action="addreserve">
                            <input type="hidden" name="reserve"/>
                            <button type="submit" name="addreservation" style={{background: "#F79F1F"}} className="btn text-white">Order now</button>
                        </form>
                    </div>
                </div>
            </div>
             ))}
          
        </div>
    </div>
  )
}

export default Body