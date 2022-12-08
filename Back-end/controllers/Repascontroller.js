const repas = require('../models/Repasmodels')
const fdable = require('formidable')
const http = require('http')


const addRepas = (req,res)=>{
    const {body} = req
    // const form = new fdable.IncomingForm();
    // form.parse(req,function(err,fields,files){
    //     let oldPath = files.profilePic.path;
    //     let newPath = path.join(__dirname, 'uploads')
    //             + '/'+files.profilePic.name
    //     let rawData = fs.readFileSync(oldPath)
    // })
    http.createServer(function (req,res) {
        if (req.url == '/fileupload') {
            let form = new fdable.IncomingForm();
            form.parse(req,function (err,field,files) {
                res.send('file uploaded')
            })
            
        }
        
    })

    repas.create({...body}).then(e=>{
        res.send(e)
    }).catch(error=>{
        res.send(error+' '+'machakil')
    })

}


module.exports = {addRepas}