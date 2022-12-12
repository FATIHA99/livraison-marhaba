const Commande = require('../models/Commandemodels');

const addCommande = async () => {

    const { body } = req
    await Commande.create({ ...body })
    try {
        res.send('created succflly')
    } catch(err) {
        res.send(err)
    }


}

module.exports = {addCommande}