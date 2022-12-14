import React,{useState,useEffect} from 'react'
import { Link, useNavigate,useParams } from "react-router-dom";
import { API_URL } from '../../../config';
import axios from "axios";

const EditRepas = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    
    const [one, setOne] = useState({});
    function getOne() {
        axios.get(`${API_URL}/repas/getone/${id}`).then((info)=>{
            setOne(info.data)
        })
    }


    const [categorie, setCategorie] = useState([]);
    const fetchCategorie = async () => {
        const all = await axios.get(`${API_URL}/api/categories`);
        setCategorie(all.data)
    }
    useEffect(()=>{
        fetchCategorie()
        getOne()
    },[])

    const handleChange = (e) =>{
        setOne({...one,[e.target.name] : e.target.value})
    }
    const saveRepas = (e)=>{
        e.preventDefault();
        axios.patch(`${API_URL}/repas/update/${id}`,one).then((data)=>{
            navigate('/repas')
        }).catch((error)=>{
            console.log(error)
        })

    }

  return (
    <div className="card mt-5 col-lg-8 mx-auto">
        <div className="card-header">
            <Link to={'/repas'} className="btn btn-sm btn-info m-2"><i className="bi bi-house-door text-white"></i></Link>
            UPDATE REPAS
        </div>
        <form className='card-body ' encType='multipart/form-data'>
            <div className="row">
                <div className="col-lg-6 col-md-6 mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={one.name} onChange={handleChange} placeholder='name' name="name" />
                </div>
                <div className="col-lg-6 col-md-6 mb-3">
                    <label className="form-label">Price</label>
                    <input type="text" className="form-control" value={one.price} onChange={handleChange} placeholder='price' name="price" />
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Categorie</label>
                <select className='form-select' onChange={handleChange} name="categorie">
                    {categorie.map((e)=>(
                        <option value={e._id}>{e.label}</option>
                    ))}
                </select>
            </div>   
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" value={one.description} onChange={handleChange} placeholder='description' name="description" />
            </div>
            <div className="mb-3">
                <label className="form-label">image</label>
                <input type="file" className="form-control"  onChange={handleChange} name="image"/>
            </div>
            <div className='mt-2'>
                <button type="button" onClick={saveRepas} className="btn btn-info text-white mt-4">UPDATE</button>
            </div>
        </form>
        <div className="card-footer text-muted">
            2 days ago
        </div>
    </div>
        
  )
}

export default EditRepas