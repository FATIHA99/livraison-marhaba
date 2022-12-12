import axios from 'axios'
import React,{useState} from 'react'
import { API_URL } from '../../../config'

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

    const onSub = (e)=>{
        e.preventDefault()
        axios.post(API_URL+'/repas/add',data).then((e)=>{
            console.log(e.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">ADD new repas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form action="#" method="POST" encType='multipart/form-data'>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" onChange={handlechange} className="form-control" name="name" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">description</label>
                            <input type="text" onChange={handlechange} className="form-control" name="description" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">price</label>
                            <input type="text" onChange={handlechange} className="form-control" name="price" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">categorie</label>
                            <input type="text" onChange={handlechange} className="form-control" name="categorie" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">image</label>
                            <input type="file" onChange={handlechange} className="form-control" name="image" multiple required/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={onSub} className="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddRepas