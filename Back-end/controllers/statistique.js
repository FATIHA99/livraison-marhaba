const User = require("../models/Usermodels");
const Repas = require("../models/Repasmodels");
const Categorie = require("../models/Categoriemodels");
const Commande = require("../models/Commandemodels");

const statistiques = async(req, res) => {

    const nuser = await User.find().count()
    const nrepas = await Repas.find().count()
    const ncategorie = await Categorie.find().count()
    const ncommande = await Commande.find().count()
    
    res.json({nuser, nrepas,ncategorie,ncommande })

};

module.exports = { statistiques };
