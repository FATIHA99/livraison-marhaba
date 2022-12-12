const mongoose = require('mongoose');


const CommandeShema = new mongoose.Schema({
    date: {
        type: Date, 
        default: Date.now
    },
    username:{
        type:String
    },
    telephone:{
        type:String
    },
    adresse:{
        type:String
    },
    repas:{
        type:String
    },
    quantity:{
        type:Number
    },
    total:{
        type:String
    },

    delivered:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model('Commande', CommandeShema)
