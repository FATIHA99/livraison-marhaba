const repas = require('../models/Repasmodels')
const multer = require('multer')

// const storage = multer.diskStorage({
//     destination : function (req,file,cb) {
//         cb(null,'./images')
//     },
//     filename : function (req,file,cb) {
//         cb(null,file.originalname)        
//     }
// })

// let upload = multer({storage : storage})



const addRepas = (req,res)=>{
    const {body} = req
    // const form = new fdable.IncomingForm();
    // form.parse(req,function(err,fields,files){
    //     let oldPath = files.profilePic.path;
    //     let newPath = path.join(__dirname, 'uploads')
    //             + '/'+files.profilePic.name
    //     let rawData = fs.readFileSync(oldPath)
    // })
    // http.createServer(function (req,res) {
    //     if (req.url == '/fileupload') {
    //         let form = new fdable.IncomingForm();
    //         form.parse(req,function (err,field,files) {
    //             res.send('file uploaded')
    //         })
            
    //     }
        
    // })


    repas.create({...body}).then(e=>{
        res.send(e)
    }).catch(error=>{
        res.send(error+' '+'machakil')
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
        res.send('updated success')
    }).catch((error)=>{
        res.send(error)
    })
}

const deletRepas = (req,res)=>{
    const id = req.params.id;
    repas.findOneAndRemove(id).then((e)=>{
        res.send('deleted repas avec success')
    }).catch((error)=>{
        res.send(error)
    })
} 


module.exports = {addRepas,getAllrepas,getOnerepas,updateRepas,deletRepas}