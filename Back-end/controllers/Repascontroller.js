const repas = require('../models/Repasmodels')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination : function (req,file,cb) {
        cb(null,'./images')
    },
    filename : function (req,file,cb) {
        cb(null,file.originalname)        
    }
})

const fileFilter = (req,file,cb)=>{
    const allowedFileTypes = ['image/jpeg','image/jpg','image/png']
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null,true)
    }else{
        cb(null,false)
    }
}

let upload = multer({storage : fileFilter}).single('image')



const addRepas = (req,res)=>{
    const {body} = req;

    // const f = file.filename

    repas.create({...body}).then(e=>{
        res.status(200).send(e)
    }).catch(error=>{
        res.status(401).send(error+' '+'machakil')
    })

}

const getAllrepas = (req,res)=>{

    repas.find().then(e=>{
        res.send(e)
    }).catch((error)=>{
        res.send(error)
    })
}

const getOnerepas = (req,res)=>{

    const id = req.params.id;
    repas.findOne({_id : id}).then((data)=>{
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