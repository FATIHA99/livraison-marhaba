const Categorie = require('../models/Categoriemodels')
const mongoose = require('mongoose')
// const Categorie = mongoose.model('Categorie');


function display(req, res) {
    Categorie.find()
        .then((categories) => {
         
            res.send(categories)

        })
        .catch()
}


function addCategorie(req, res) {
    const { body } = req
    Categorie.create({ ...body })
        .then((e) => {
            res.json({ message: 'categorie added successfully' })

        })
        .catch((error) => {
            res.send(error)
        })
}

function deleteCategorie(req, res) {
    const id = req.params.id
    Categorie.findByIdAndRemove(id)
        .then((e) => {
            res.send('removed')
        }).catch((e) => {
            res.send('removed')
        })
}



const getOne = async(req,res)=>{
    const {id} = req.params
    try {
    const findOne = await Categorie.findById({_id : id})
    if(findOne) res.json(findOne)
    else res.send("not found")
    } catch (error) {
        res.send(error)
    }
}

function update(req, res) {
    const { body } = req
    const _id = req.params
    let newLabel = body.label;
    let newDescription= body.description;
    Categorie.findOneAndUpdate(_id, { label: newLabel ,description:newDescription})
        .then((e) => {
            res.send('updated')
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports = { display, addCategorie, deleteCategorie, update,getOne }