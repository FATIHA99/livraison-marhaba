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
const stati = require('../controllers/statistique')
const route = express.Router();
const {Payment} = require('../controllers/Payment')

route.post('/signup',userSignupValidator ,user.createUser);
route.post('/signin',userSigninValidator ,user.login);
route.get('/signout',user.signout);
route.get('/home',requireSignIn, chekrole);
route.post('/forgetpassword',ForgetValidator,user.forgetpassword);
route.post('/resetpassword/:token',user.resetpassword);
route.get('/verify/:token',user.verify);
// bannie compte
route.get('/client',user.getUsers)
route.put('/client/banie/:id',user.banieCompte)

route.post('/addlivreur',userSignupValidator ,livreur.CreateLivreur)
route.get('/DisplayDelivery',livreur.DisplayDelivery)
route.delete('/DeleteDelivery/:id',livreur.DeleteDelivery)


// start routes des repas
const upload = require('../middlewares/upload');

route.post('/repas/add', upload.single('image'), repas.addRepas)
route.get('/repas',repas.getAllrepas)
route.get('/repas/getone/:id',repas.getOnerepas)
route.patch('/repas/update/:id',repas.updateRepas)
route.get('/repas/delete/:id',repas.deletRepas)


// end routes des repas


// routes des commandes

route.post('/commande/addCommande',commande.addCommande)
route.get('/commandes',commande.displayCommandes)
route.put('/commandes/updateStatus/:id',commande.updateStatus)

//end routes des commandes 

route.post('/payments', Payment)

// start statistic

route.get('/stat',stati.statistiques)


module.exports = route