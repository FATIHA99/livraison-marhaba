const mongoose = require('mongoose');


const CommandeShema = new mongoose.Schema({
    date: {
        type: Date, 
        default: Date.now
    },
    id_user: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users"
        }
      ],
    username:{
        type:String
    },
    adresse:{
        type:String
    },
    ville:{
        type:String
    },
    Code_postale:{
        type:String
    },
    telephone:{
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
