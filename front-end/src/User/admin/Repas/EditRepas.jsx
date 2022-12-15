import React from 'react'

const EditRepas = () => {
  return (
    <div className="card mt-5 col-8 mx-auto">
        <div className="card-header">
            UPDATE REPAS
        </div>
        <form className='card-body' encType='multipart/form-data'>
            <div class="row">
                <div className="col-lg-6 col-md-6 mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder='name' name="name" required/>
                </div>
                <div class="col-lg-6 col-md-6 mb-3">
                    <label className="form-label">Price</label>
                    <input type="text" className="form-control" placeholder='price' name="price" required/>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">categorie</label>
                <input type="text" className="form-control" placeholder='categorie' name="categorie" required/>
            </div>   
            <div className="mb-3">
                <label className="form-label">categorie</label>
                <input type="text" className="form-control" placeholder='categorie' name="categorie" required/>
            </div>
            <div className="mb-3">
                <label className="form-label">image</label>
                <input type="file" className="form-control" name="image" multiple required/>
            </div>
            <div className='mt-2'>
                <button type="button" className="btn btn-info text-white mt-4">AJOUTER</button>
            </div>
        </form>
        <div className="card-footer text-muted">
            2 days ago
        </div>
    </div>
        
  )
}

export default EditRepas