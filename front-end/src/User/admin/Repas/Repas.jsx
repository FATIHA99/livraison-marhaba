import {useState,useEffect} from 'react'
import axios from "axios";
import NavAdmin from '../sideBar/navAdmin/navAdmin.jsx';
import Sidebar from '../sideBar/Sidebar'
import AddRepas from './AddRepas.jsx'
import { API_URL } from "../../../config";

const Repas = () => {
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
    <main className="container-fluid bg-white">
        <div className="row d-flex flex-nowrap">
            <Sidebar/>
            <div className="col">
                <div className="row">
                   <NavAdmin/>
                </div>
                <div className="container-fluid">
                    <div className="row mt-4">
                        <div className="col-md d-flex justify-content-between">
                            <div className="">
                                <h3>Repas List</h3>
                            </div>
                            <div className="">
                                <i class="bi bi-eject text-info me-2 fs-5"></i>
                                <button type="button" className="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">ADD NEW REPAS</button>
                                <AddRepas/>
                            </div>
                        </div>
                    </div>
                    <hr/>
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
                                <tr className="align-middle">
                                    <td>{repas.image}</td>
                                    <td>{repas.name}</td>
                                    <td >{repas.description}</td>
                                    <td>{repas.price}</td>
                                    <td>{repas.categorie}</td>
                                    <td className="d-flex flex-row justify-content-end">
                                        <form className='text-nowrap' method="post">
                                            <button className='btn btn-outline-info me-1'><i class="bi bi-pencil-square"></i></button>
                                            <button className="btn btn-outline-danger"><i className="bi bi-trash"></i></button>
                                        </form>
                                    </td>
                                </tr>
                                ))}                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Repas