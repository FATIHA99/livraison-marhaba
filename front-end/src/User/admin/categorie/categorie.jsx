import React, { useEffect, useState } from "react";
import axios from 'axios';
// import { ToastContainer,toast } from "react-toastify";
import toastr from "toastr";
import { API_URL } from '../../../config';
import "toastr/build/toastr.css";
// import Categorie from "../../../../back-end/models/Categorie";
function Tail() {
  const [categorie, setCategorie] = useState([]);

  //  dispaly one categorie 
  const [oneCat, setCat] = useState({ label: '', description: '' })
  const fetchOne = async (id, event) => {
    event.preventDefault();
    const one = await axios.get(`${API_URL}/api/categories/getOne/${id}`)
    setCat(one.data)
    console.log(one.data)
  }

  // dispaly all  
  const fetchCategorie = async () => {
    const all = await axios.get(`${API_URL}/api/categories`);
    setCategorie(all.data)
  }

  useEffect(() => {
    fetchCategorie()
  }, [])



  // delete 
  function deleteId(id, event) {
    event.preventDefault();

    axios.delete(`${API_URL}/api/categorie/delete/${id}`)
    .then((res) => {
        window.location.reload(false);
        toastr.success('categorie supprimé', {
            positionClass: "toastr-bottom-left",
        })
    })
    //   .then((e) => {
    //     window.location.reload(false);
    //     // toastr.success('categorie supprimé');
    //     toastr.success('categorie supprimé', {
    //         positionClass: "toastr-bottom-left",
    //     })
    //   })
  }
  // update
  function updateId(id, event) {
    event.preventDefault();
    axios.put(`${API_URL}/api/categories/update/${id}`, oneCat)

      .then((e) => {
        window.location.reload(false);
        toastr.success('categorie modifié');
      })
  }


  // add
  const [dataToadd, setdata] = useState([])
  // handle input
  function handleInput(event) {
    setdata({ ...dataToadd, [event.target.name]: event.target.value });
  }
  // submit add

  function submitForm(event) {
    event.preventDefault();
    axios.post(`${API_URL}/api/categories`, dataToadd)
    .then((res) => {
        let message = res.data.message;
        window.location.reload(false);
        toastr.success(message, {
            positionClass: "toastr-bottom-left",
        })
    })
      .catch()
  }




  return (
    <div >
   
      <h1 className="text-3xl font-bold font-mono "> Repas Categories </h1>

      <form >
        {oneCat ?
          <div>
            <div key={oneCat._id} className="d-flex container  ">
              <div class="mb-3 me-5">
                <input type="text" name="label" value={oneCat.label} onChange={(e) => { setCat({ ...oneCat, [e.target.name]: e.target.value }) }} placeholder="label" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <input type="text" name="description" value={oneCat.description} onChange={(e) => { setCat({ ...oneCat, [e.target.name]: e.target.value }) }} placeholder="description" class="form-control" id="exampleInputPassword1" />
              </div>

              <button type="submit" className="btn btn-warning" onClick={(e) => updateId(oneCat._id, e)} >modifier</button>
            </div>
          </div>
          : <div> no result</div>
        }
      </form>

      <div className="d-flex flex-row row container  ">
        {/* table */}
        <div className="row overflow-auto  col-8">
          <table className="table table-bordered" id="myTable">
            <thead>
              <tr style={{ color: "#acacac" }}>
                <th scope='col' className=" d-none text-center">id</th>
                <th scope='col ' className="text-center">title</th>
                <th scope='col ' className="text-center">description</th>
                <th scope='col ' className="text-center">operation</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {categorie.map((cat) => (
                //  <tr key={cat._id} >
                <tr className="align-middle">

                  <td className="d-none">{cat._id}</td>
                  <td className="">{cat.label}</td>
                  <td className="">{cat.description}</td>
                  <td className="d-flex flex-row justify-content-end">
                    <div>
                      <td> <button className="btn btn-outline-danger" onClick={(e) => deleteId(cat._id, e)} > <i className="bi bi-trash"></i></button> </td>
                      <td> <button   className="btn  btn-outline-info" onClick={(e) => fetchOne(cat._id, e)} ><i class="bi bi-pencil-square"></i> </button> </td>
                    </div>
                  </td>
                </tr>

              ))}

            </tbody>
          </table>
        </div>






        {/* form  add  */}


        <form onSubmit={submitForm} className="col-4">
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">label</label>
            <input type="text" name='label' onChange={handleInput} className="form-control" placeholder="label" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">description</label>
            <textarea name="description" onChange={handleInput} placeholder="description"  className="form-control"  id="exampleInputPassword1"  cols="30" rows="10"></textarea>
            {/* <input type="text" name='description' onChange={handleInput} className="form-control" placeholder="description" /> */}
          </div>
          <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-warning">Ajouter</button>

          </div>
        </form>

      </div>

               
      
      
    </div>
  )

}

export default Tail;