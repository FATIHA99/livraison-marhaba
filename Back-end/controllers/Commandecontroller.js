const Commande = require('../models/Commandemodels');

const addCommande = async () => {

    const { body } = req
    await Commande.create({ ...body })
    try {
        res.send('created successfully')
    } catch(err) {
        res.send(err)
    }


}

function displayCommandes(req,res){
    Commande.find()
    .then((e)=>{
        res.send()
    })
}

module.exports = {addCommande,displayCommandes}