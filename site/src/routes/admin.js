var express = require('express');
var router = express.Router();
const {list, create, edit, update, destroy, newProduct}=require("../controllers/adminController")
const adminValidate = require("../middlewares/adminValidate")
const productValidate = require("../middlewares/productValidate")
const upload = require('../middlewares/multerProducts')
/* GET users listing. */
router.get('/', adminValidate, list);

router.get('/create', adminValidate, create);
router.post('/create', adminValidate, upload.any(), productValidate, newProduct);


//editar producto
router.get("/edit/:id", adminValidate, edit);
router.put("/edit/:id", adminValidate, upload.any(), productValidate, update)

//borrar producto
router.delete("/delete/:id", adminValidate,destroy)

//ESTO ESTA DE GUIA PERO EN TEORIA NO CAMBIARIAN LAS DE ARRIBA
/* router.get('/', controller.add)
router.post('/', controller.create)

router.get('/edit/:id', edit);
router.put("/edit/:id",update)

router.delete("/delete/:id",destroy)
router.post('/', controller.create)

router.get('/', controller.add)
router.post('/', controller.create)

router.get('/', controller.add)
router.post('/', controller.create)*/
module.exports=router