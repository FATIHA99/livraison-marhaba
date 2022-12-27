const Categorie = require('../models/Categoriemodels')
const mongoose = require('mongoose')

function display(req, res) {
    Categorie.find()
        .then((categories) => { res.send(categories) })
        .catch()
}

function addCategorie(req, res) {
    const { body } = req
    Categorie.create({ ...body })
        .then((e) => { res.json({ message: 'categorie added successfully' }) })
        .catch((error) => { res.send(error) })
}

function deleteCategorie(req, res) {
    const id = req.params.id
    Categorie.findByIdAndRemove(id)
        .then((e) => { res.send('removed') })
        .catch((e) => { res.send('removed') })
}

const getOne = async (req, res) => {
    const { id } = req.params
    try {
        const findOne = await Categorie.findById({ _id: id })
        if (findOne) res.json(findOne)
        else res.send("not found")
    } catch (error) {
        res.send(error)
    }
}

// function update(req, res) {
//     const { body } = req
//     const { id } = req.params
//     let newLabel = body.label;
//     let newDescription = body.description;
//     Categorie.findById(id)
//         .then((e) => {
//             Categorie.updateOne({ _id: id }, { $set: { label: newLabel, description: newDescription } })
//                 .then((e) => {
//                     res.send("updated succeess")
//                 })

//         })
//         .catch((err) => {
//             console.log(err)
//         })
 
// }



function update(req,res){
    const {id}= req.params
    Categorie.findById(id)
    .then((e)=>{
         if(e){
            Categorie.updateOne({_id:id},{$set:{label:req.label,description:req.description}})
            .then((e)=>{
                res.send('categorie updated')
            })
         }
    })
    .catch((err)=>{
        console.log(err)
    })
}
















module.exports = { display, addCategorie, deleteCategorie, update, getOne }