const Commande = require('../models/Commandemodels');
const addCommande = async (req, res) => {

    const { body } = req
    await Commande.create({ ...body })
    try {
        res.send('created successfully')
    } catch (err) {
        res.send(err)
    }

}

function displayCommandes(req, res) {
    Commande.find()
        .then((e) => {
            res.send(e)
        })
}

function  updateStatus (req, res) {
    const { id } = req.params

      Commande.findById(id)
        .then((e) => {
            if (e.delivered) {
                Commande.updateOne({_id: id }, {$set: { delivered: false }})
                    .then((e)=>{  })
                    .catch((error)=>{ console.log(error) })
            }
            else {
                Commande.updateOne({_id: id }, {$set: { delivered: true }})
                    .then((e)=>{ res.send('status modifié') })
                    .catch((error)=>{ console.log(error) })
            }
        })
    }



module.exports = { addCommande, displayCommandes, updateStatus }