const mongoose = require('mongoose');

const Repashema = new mongoose.Schema({
    name : {
        type : String
    },
    description : {
        type : String
    },
    price : {
        type : String
    },

    categorie : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Categorie'
    },

    image : {
        type : String
    }
})

module.exports = mongoose.model('repas',Repashema);
