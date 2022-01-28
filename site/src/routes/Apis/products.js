var express = require('express');
const { buscar } = require('../../controllers/api/buscadorApi');
var router = express.Router();

const {productosFiltrados}= require("../../controllers/api/filterApi")
const {productosOrdenados}= require("../../controllers/api/orderApi")

router.get("/",productosFiltrados)
router.get("/search",buscar)
router.get("/orden",productosOrdenados)
module.exports = router