import React from 'react'

function Totalchekouat({products}) {
    
    const totalTochekout = (products) => {

        return products.reduce((total, product)=>total + (product.count * product.price), 0)
    
      }



    return (
        <div>
            <div className="shadow mt-4 pt-2 py-1 rounded px-3">
                <h3>TOTAL</h3>
                <hr />
                <div className="d-flex flex-row justify-content-between pt-3">
                    <div>
                        <p>Total des repas:</p>
                    </div>
                    <div>
                        <p>{totalTochekout(products)} dhs</p>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        <p>Frais de livraison:</p>
                    </div>
                    <div>
                        <p>100 dhs</p>
                    </div>
                </div>
                <hr />
                <div className="d-flex flex-row justify-content-between">
                    <div>
                        <p><b>Total à payer:</b></p>
                    </div>
                    <div>
                        <h5>{totalTochekout(products) + 100} dhs</h5>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Totalchekouat