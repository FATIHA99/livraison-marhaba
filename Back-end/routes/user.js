const express = require("express");
const user = require('../controllers/Usercontrollers');
const livreur = require('../controllers/Livreurcontrollers');
const commande = require('../controllers/Commandecontrollers');
const {requireSignIn} = require('../middlewares/auth');
const {chekrole} = require('../middlewares/auth');
const {userSignupValidator } = require('../middlewares/userValidator');
const {ForgetValidator} = require('../middlewares/userValidator')
const {userSigninValidator } = require('../middlewares/userValidator');
const repas = require('../controllers/Repascontroller')
const route = express.Router();



route.post('/signup',userSignupValidator ,user.createUser);
route.post('/signin',userSigninValidator ,user.login);
route.get('/signout',user.signout);
route.get('/home',requireSignIn, chekrole);
route.post('/forgetpassword',ForgetValidator,user.forgetpassword);
route.post('/resetpassword/:token',user.resetpassword);
route.get('/verify/:token',user.verify);

route.post('/addlivreur',userSignupValidator ,livreur.CreateLivreur)
route.get('/DisplayDelivery',livreur.DisplayDelivery)
route.delete('/DeleteDelivery/:id',livreur.DeleteDelivery)


// start routes des repas

route.post('/repas/add',repas.addRepas)
route.get('/repas',repas.getAllrepas)
route.get('/repas/getone/:id',repas.getOnerepas)
route.patch('/repas/update/:id',repas.updateRepas)
route.get('/repas/delete/:id',repas.deletRepas)


// end routes des repas


// routes des commandes

route.post('/commande/addCommande',commande.addCommande)


//end routes des commandes 





module.exports = route