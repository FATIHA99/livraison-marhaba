const express = require("express");
const user = require('../controllers/Usercontrollers');
const livreur = require('../controllers/Livreurcontrollers')
const {requireSignIn} = require('../middlewares/auth');
const {chekrole} = require('../middlewares/auth');
const {userSignupValidator } = require('../middlewares/userValidator');
const {userSigninValidator } = require('../middlewares/userValidator');
const repas = require('../controllers/Repascontroller')
const route = express.Router();



route.post('/signup',userSignupValidator ,user.createUser);
route.post('/signin',userSigninValidator ,user.login);
route.get('/signout',user.signout);
route.get('/home',requireSignIn, chekrole);
route.post('/forgetpassword',user.forgetpassword);
route.post('/resetpassword/:token',user.resetpassword);
route.get('/verify/:token',user.verify);

route.post('/addlivreur',userSignupValidator ,livreur.CreateLivreur)


route.post('/addrepas',repas.addRepas)

module.exports = route