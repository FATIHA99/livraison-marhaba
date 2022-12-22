import {useState,useEffect} from 'react'
import axios from "axios";
import AddRepas from './AddRepas.jsx'
import { API_URL } from "../../../config";
import {ToastContainer,toast} from "react-toastify";
import { Link } from 'react-router-dom';

const Repas = () => {
    // fetch all
    const [data, setData] = useState([])
    const fetchRepas = () => {
        axios.get(API_URL+'/repas').then((e)=>{
            setData(e.data)
        })
      }
      
      useEffect(() => {
        fetchRepas()
      }, [])

    function deleteRepas(id,name) {
        const result = window.confirm('vous pouvez suprimer '+name)
        if (result) {
            axios.get(API_URL+`/repas/delete/`+id)
          .then(() => {
            toast.success('deleted success')
            window.location.reload()
          }).catch((error)=>{
              console.log(error)
          })
        }
    }

    
  return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-md d-flex justify-content-between">
                    <div className="">
                        <h3>Repas List</h3>
                    </div>
                    <div className="">
                        <i className="bi bi-eject text-info me-2 fs-5"></i>
                        <label htmlFor="adds" className='btn btn-info text-white'>ADD NEW REPAS</label>
                    </div>
                </div>
            </div>
            <hr/>
            <input type="checkbox" className="d-none" id="adds"/>
            <AddRepas/>
            <div style={{width: "99%", margin: "auto"}} className="row overflow-auto">
                <table className="table table-bordered" id="myTable">
                    <thead>
                        <tr style={{color: "#acacac"}}>
                            <th scope='col'>image</th>
                            <th scope="col">name</th>
                            <th scope="col">description</th>
                            <th scope='col'>price</th>
                            <th scope='col'>categorie</th>
                            <th className="text-center">operation</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {data.map((repas)=>(
                        <tr key={repas._id} className="align-middle">
                            <td><img width={100} src={repas.image ? 'http://localhost:8080/images/'+repas.image:''}/></td>
                            <td className='text-nowrap'>{repas.name}</td>
                            <td >{repas.description}</td>
                            <td>{repas.price}</td>
                            <td>{repas.categorie.label}</td>
                            <td className="d-flex flex-row justify-content-end">
                                <div className='text-nowrap'>
                                    <Link to={`/EditRepas/${repas._id}`} className='btn btn-outline-info me-1'><i className="bi bi-pencil-square"></i></Link>
                                    <button className="btn btn-outline-danger" onClick={()=>deleteRepas(repas._id,repas.name)}><i className="bi bi-trash"></i></button>
                                </div>
                            </td>
                        </tr>
                        ))}                            
                    </tbody>
                </table>
            </div>
            <ToastContainer/>
        </div>
  )
}

export default Repas