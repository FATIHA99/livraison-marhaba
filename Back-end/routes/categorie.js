const router = require('express').Router();
const {display, addCategorie, deleteCategorie, update,getOne} = require('../controllers/CategorieController')
router.delete('/categorie/delete/:id',deleteCategorie)
router.get('/categories',display)
router.post('/categories',addCategorie)
router.put('/categories/update/:id',update)
router.get('/categories/getOne/:id',getOne)
module.exports = router;