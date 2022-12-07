import React from 'react'

const AddRepas = () => {
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">ADD new repas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form action="add-student.php" method="POST">
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">description</label>
                            <input type="text" className="form-control" name="description" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">price</label>
                            <input type="text" className="form-control" name="price" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">categorie</label>
                            <input type="text" className="form-control" name="categorie" required/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">image</label>
                            <input type="file" className="form-control" name="image" required/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddRepas