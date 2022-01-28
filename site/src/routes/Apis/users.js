var express = require('express');
var router = express.Router();

const {usuarioRegistrado}= require("../../controllers/api/usuariosApiController")

router.get("/",usuarioRegistrado)
module.exports = router