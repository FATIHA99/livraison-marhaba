const User = require('../models/Usermodels')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const { transporter } = require('../helpers/config')


const createUser = async (req, res) => {
    const {body} = req

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(body.password, salt);
    const chekemail = await User.findOne({ email: body.email })

    if (chekemail){
    return res.status(400).json({
        error: 'Email ealrdy exist'
    })
    } else {
        const user = await User.create({
            ...body ,
            role: 'client',
            password: hashPassword
        })
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: 3600 });
        const {email} = user;
        transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "Vérification votre compte Marhaba",
            html: `<p>cliquer sur ce <a href="http://localhost:8080/verify/${token}">lien</a> pour vérifier votre a compte</p>`
        })
        try {

        res.send('created succflly')
       
        } catch {
            res.send('error creating')
        }
    }
}


const login = async (req, res) => {
     
    const user = await User.findOne({ email: req.body.email })
    if (!user)
    return res.status(400).json({
        error: 'Email Not Found'
    })

    if(user.confirmed===false)
    return res.status(400).json({
        error : 'your email not confirme verify your emai'
    })

    if(user.active === false)
    return res.status(400).json({
        error: 'your compte is banne'
    })

    const password = await bcrypt.compare(req.body.password, user.password)
    if (!password) 
    return res.status(400).json({
        error: 'Password Not Found'
    })


    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.TOKEN_SECRET)
    res.cookie('token', token)
    const { _id, username, email, role } = user;
    return res.status(200).send({user: {_id, username, email, role}})


}

const verify = async (req, res) => {
    
    const user = jwt.verify(req.params.token, process.env.TOKEN_SECRET)
    User.findByIdAndUpdate(user._id, {confirmed: true })
        .then(() => { res.redirect('http://localhost:3000/signin')})
        .catch(() => { res.send('not update') })

}

const forgetpassword = async (req, res) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        return res.status(400).json({
             error: 'Not found user with this email' 
            
            })
    } else {
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET_RESET, { expiresIn: 3600 });
        const {email} = user;
        transporter.sendMail({
            from: process.env.EMAIL,
            to: req.body.email,
            subject: "Réinitialisation de mot de passe pour votre compte Marhaba",
            html: `<p>cliquer sur ce <a href="http://localhost:3000/resetpassword/${token}">lien</a> pour réinitialiser votre mot de passe de votre compte Marhaba</p>`
        })
       
            .then(() => { res.send({token, user: {email}}) })
            .catch((error) => { res.send(error) })
    }
}



const resetpassword = async (req, res) => {

    const user = jwt.verify(req.params.token, process.env.TOKEN_SECRET_RESET)
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    User.findByIdAndUpdate(user._id, { password: hashPassword })
        .then(() => { res.send('password updated') })
        .catch(() => { res.send('not update') })
}

const signout = (req, res) => {

    res.clearCookie('token');

    res.send('User signed out')

}


module.exports = { createUser, login, signout, forgetpassword, resetpassword, verify }