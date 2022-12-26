import React,{useState,useEffect} from 'react'
import { API_URL } from "../../../config";
import axios from "axios";
import {ToastContainer,toast} from "react-toastify";

const Client = () => {
    const [user, setUser] = useState([])
    function getUser() {
        axios(API_URL+'/client').then((e) => {
            setUser(e.data)
        })
    }
    useEffect(() => {
      getUser()
    }, [])

    const update = async (e, id) => {
        e.preventDefault();
        await axios.put(`${API_URL}/client/banie/${id}`)
          .then((e) => {
              toast.warning(e.data)
              window.location.reload()           
          }).catch((error)=>console.log(error))
      }

    
  return (
    <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-md d-flex justify-content-between">
                    <div className="">
                        <h3>Client List</h3>
                    </div>
                </div>
            </div>
            <hr/>
            <div style={{width: "99%", margin: "auto"}} className="row overflow-auto">
                <table className="table table-bordered" id="myTable">
                    <thead>
                        <tr style={{color: "#acacac"}}>
                            <th scope="col">Username</th>
                            <th scope="col">email</th>
                            <th scope="col">status</th>
                            <th className="text-center">Désactive or Active</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {user.map((client)=>(
                        <tr key={client._id} className="align-middle">
                            <td>{client.username}</td>
                            <td >{client.email}</td>
                            <td >{client.active?<span className="badge text-bg-success">Activé</span>:<span className="badge text-bg-danger">Désactivé</span>}</td>
                            <td className="d-flex flex-row justify-content-end">
                                <div>
                                    <button type='button' onClick={(e)=>{update(e,client._id)}} className='btn btn-outline-warning'>{client.active ? 'désactiver' : 'activer'}</button>
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

export default Client