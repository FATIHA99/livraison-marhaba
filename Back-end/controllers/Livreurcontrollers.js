const User = require('../models/Usermodels')
const bcrypt = require('bcryptjs')



const CreateLivreur = async (req, res) => {
    const {body} = req
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    const chekemail = await User.findOne({ email: req.body.email })

    if (chekemail){
    
    return res.status(400).json({
        error: 'Email Not Found '
    })
    } else {
        const user = await User.create({
            ...body,
            role: 'livreur',
            password: hashPassword
        })
        try {
            res.send(user)

        } catch {
            res.send('error creating')
        }
    }
}
const DisplayDelivery = async (req,res)=>{
    User.find({role:'livreur'})
    .then((delivery) => {
        res.json(delivery)
    })
    .catch()
}


const DeleteDelivery = async(req,res)=>{
    const {id} = req.params
    User.findByIdAndRemove(id)
    .then((e)=>{
       res.send('removed') 
    })
    .catch((e)=>{
        res.send(' not removed') 
    })
}
module.exports = { CreateLivreur,DisplayDelivery,DeleteDelivery }
