import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { API_URL } from '../../../config'
import { ToastContainer, toast } from "react-toastify";
import './repas.css'

const AddRepas = () => {

    const [data, setData] = useState({
        name : '',
        description : '',
        price : '',
        categorie : '',
        image : ''
    })

    const handlechange = (e)=>{
        setData({...data , [e.target.name] : e.target.value})
    }
    const handlePhoto = (e)=>{
        setData({...data,image:e.target.files[0]})
        console.log(data.image)
    }

    // 
    const [categorie, setCategorie] = useState([]);
    const fetchCategorie = async () => {
        const all = await axios.get(`${API_URL}/api/categories`);
        setCategorie(all.data)
      }
    
      useEffect(() => {
        fetchCategorie()
    
      }, [])
    
// 
    const onSub = async (e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('name',data.name)
        formData.append('description',data.description)
        formData.append('price',data.price)
        formData.append('categorie',data.categorie)
        formData.append('image',data.image)
        console.log(formData)
        const add = await axios.post(API_URL+'/repas/add',formData)
        if(add){ 
            toast.success('created repas avec success')
            window.location.reload()
        }
        else console.log('error')
    }
  return (
        <div className='form'>
            <form method="POST" className='mt-2 d-flex justify-content-between' encType='multipart/form-data' id='form'>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" onChange={handlechange} className="form-control" placeholder='name' name="name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">description</label>
                    <input type="text" onChange={handlechange} className="form-control" placeholder='description' name="description" />
                </div>
                <div className="mb-3">
                    <label className="form-label">price</label>
                    <input type="text" onChange={handlechange} className="form-control" placeholder='price' name="price" />
                </div>
                <div className="mb-3">
                    <label className="form-label">categorie</label>
                    <select onChange={handlechange} className='form-select' name="categorie">
                        {categorie.map((cat)=>(
                            <option className='form-control' value={cat._id}>{cat.label}</option> 
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">image</label>
                    <input type="file" onChange={handlePhoto} className="form-control" name="image" multiple />
                </div>
                <div className='mt-2'>
                    <button type="button" onClick={onSub} className="btn btn-info text-white mt-4">AJOUTER</button>
                </div>
            </form>
            <ToastContainer/>
            <hr />
        </div>
  )
}

export default AddRepas