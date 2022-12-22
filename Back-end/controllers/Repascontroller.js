const repas = require('../models/Repasmodels')
const Categorie=require('../models/Categoriemodels')
const addRepas = (req,res)=>{
    const {body} = req
    const img = req.file.filename
    repas.create({...body,image : img}).then(e=>{
        res.status(200).send(e)
    }).catch(error=>{
        res.status(401).send(error+' '+'machakil')
    })
}

const getAllrepas = (req,res)=>{

    repas.find()
    .populate({
        path : 'categorie',
        model:Categorie
    })
    .then(e=>{
        res.send(e)
    }).catch((error)=>{
        res.send(error)
    })
}

const getOnerepas = (req,res)=>{

    const id = req.params.id;
    repas.findOne({_id : id})
    .populate({
        path : 'categorie',
        model:Categorie
    }).then((data)=>{
        res.send(data)
    }).catch((error)=>{
        res.send(error)
    })
}

const updateRepas = (req,res)=>{
    const {body} = req
    const id = req.params.id
    repas.updateOne({_id : id},{...body}).then((data)=>{
        res.status(200).send('updated success')
    }).catch((error)=>{
        res.status(401).send(error)
    })
}

const deletRepas = (req,res)=>{
    const id = req.params.id;
    repas.findByIdAndDelete(id).then((e)=>{
        res.send('deleted repas avec success')
    }).catch((error)=>{
        res.send(error)
    })
} 


module.exports = {addRepas,getAllrepas,getOnerepas,updateRepas,deletRepas}