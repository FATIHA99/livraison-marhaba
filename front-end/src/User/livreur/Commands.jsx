import React, { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.css";


function Commands() {

  const [commands, setCommandes] = useState([])

  const fetchCommandes = async () => {
    // event.preventDefault();
    const commandes = await axios.get(`${API_URL}/commandes`)
    setCommandes(commandes.data);
    console.log(commandes.data)
  }

  useEffect(() => { fetchCommandes() }, [commands])

  const update = async (e, id) => {
    e.preventDefault();
    await axios.put(`${API_URL}/commandes/updateStatus/${id}`)
      .then((e) => {
        window.location.reload(false);
        toastr.success('status modifié');
      })
  }

  return (

    <table className="table  mt-5 table-bordered shadow-lg p-3 mb-5 bg-body rounded" id="myTable">
      <thead>
        <tr style={{ color: "#acacac" }}>
          <th scope='col' className=" d-none text-center">id</th>
          <th scope='col ' className="text-center">Client</th>
          <th scope='col ' className="text-center">adresse</th>
          <th scope='col ' className="text-center">code postale</th>
          <th scope='col ' className="text-center">telephone</th>
          <th scope='col ' className="text-center">repas</th>
          <th scope='col ' className="text-center">quantity</th>
          <th scope='col ' className="text-center">total</th>
          <th scope='col ' className="text-center">date</th>
          <th scope='col ' className="text-center">delivered</th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {commands.map((c) => (
          <tr className="align-middle">
            <td className="">{c.username}</td>
            <td className="">{c.adresse} </td>
            <td className="">{c.Code_postale} </td>
            <td className="">{c.telephone} </td>
            <td className="">{c.repas} </td>
            <td className="">{c.quantity} </td>
            <td className="">{c.date}</td>
            <td className="">{c.total} </td>
            <td className="">{c.delivered ? <label className="text-success"> <i class="bi bi-cart-check-fill"></i> delivrer</label> : <label className="text-danger"> <i class="bi bi-cart-x-fill"></i> non delivrer</label>  } </td>
            <td className=""><input  type="radio" className="btn btn-info"  name={c._id} onClick={(e) => update(e, c._id)}  value='change value' /></td>

          </tr>
        ))}
      </tbody>
    </table>
  )

}
export default Commands