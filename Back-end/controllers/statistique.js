const User = require("../models/Usermodels");
const Repas = require("../models/Repasmodels");
const Categorie = require("../models/Categoriemodels");
const Commande = require("../models/Commandemodels");

const statistiques = async(req, res) => {

    const nuser = await User.aggregate([{ $group: { _id: null, sum: { $count: {} } } }])
    const nrepas = await Repas.aggregate([{ $group: { _id: null, sum: { $count: {} } } }])
    const ncategorie = await Categorie.aggregate([{ $group: { _id: null, sum: { $count: {} } } }])
    const ncommande = await Commande.aggregate([{ $group: { _id: null, sum: { $count: {} } } }])

    res.json({
        user : nuser[0].sum,
        repas : nrepas[0].sum,
        categorie : ncategorie[0].sum,
        commande : ncommande[0].sum

    })

};

module.exports = { statistiques };
