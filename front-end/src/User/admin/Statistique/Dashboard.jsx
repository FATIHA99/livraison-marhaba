import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {API_URL} from "../../../config";


const Dashboard = () => {

    const [first, setFirst] = useState([])
    function stat() {
        axios.get(`${API_URL}/stat`).then((e)=>{
            setFirst(e.data)
        }).catch((err)=>{
            console.log(err)
        })
    }


    useEffect(() => {
    stat()
    }, [])

  return (
   
    <div className="container-fluid">
        <div className="row mt-5">
            <div className="col-md col-sm-6 p-2">
                <div className="p-2" style={{background: "#badff8",borderRadius: "6px"}}>
                    <i className="bi bi-grid fs-3" style={{color: "#31a2e4"}}></i>
                    <p>Repas</p>
                    <p className="text-end fw-bold fs-5">{first.nrepas}</p>
                </div>
            </div>
            <div className="col-md col-sm-6 p-2">
                <div className="p-2" style={{background: "#ee94cb",borderRadius: "6px"}}>
                    <i className="bi bi-file-earmark-bar-graph fs-3" style={{color: "#f33d9e"}}></i>
                    <p>Categories</p>
                    <p className="text-end fw-bold fs-5">{first.ncategorie}</p>
                </div>
            </div>
            <div className="col-md col-sm-6 p-2">
                <div className="p-2 text-white" style={{background: "#FF8303",borderRadius: "6px"}}>
                    <i className="bi bi-cart2 fs-3"></i>
                    <p>commandes</p>
                    <p className="text-end fw-bold fs-5">{first.ncommande}</p>
                </div>
            </div>
            <div className="col-md col-sm-6 p-2">
                <div className="p-2 text-white" style={{background: "linear-gradient(90deg, rgb(168, 163, 218) 0%, rgb(252, 166, 38) 100%)",borderRadius: "6px"}}>
                    <i className="bi bi-person fs-3"></i>
                    <p>Users</p>
                    <p className="text-end fw-bold fs-5">{first.nuser}</p>
                </div>
            </div>
        </div>
    </div>
               
  )
}

export default Dashboard