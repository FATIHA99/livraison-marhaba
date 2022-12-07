const mongoose = require('mongoose');


const CommandeShema = new mongoose.Schema({
    date: { 
        type: Date, 
        default: Date.now
    },
    total: { 
        type: String, 
        required: true 
    },
    email:{
        type: String, 
        required: true 
    },
    nom:{
        type: String, 
        required: true 
    },
    adresse:{
        type: String, 
        required: true 
    }

})

module.exports = mongoose.model('Commande', CommandeShema);