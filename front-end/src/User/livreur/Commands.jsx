import React from "react";


function Commands(){
    return(

        <table className="table  mt-5 table-bordered shadow-lg p-3 mb-5 bg-body rounded" id="myTable">
        <thead>
          <tr style={{ color: "#acacac" }}>
            <th scope='col' className=" d-none text-center">id</th>
            <th scope='col ' className="text-center">title</th>
            <th scope='col ' className="text-center">date</th>
            <th scope='col ' className="text-center">état</th>
            <th scope='col ' className="text-center">opérations</th>
          </tr>
        </thead>
        <tbody className="bg-white">
         
            <tr className="align-middle">
              <td className="">tttt</td>
              <td className="">date</td>
              <td className=""> <input  className =" me-2" type="radio"/><label> livrer </label></td>
              <td className="d-flex flex-row justify-content-end">
                <div>
                  <td> <button className="btn btn-outline-danger"  > <i className="bi bi-trash"></i></button> </td>
                  <td> <button className="btn  btn-outline-info"  ><i class="bi bi-pencil-square"></i> </button> </td>
                </div>
              </td>
            </tr>

        </tbody>
      </table>
    )

} 
export default Commands