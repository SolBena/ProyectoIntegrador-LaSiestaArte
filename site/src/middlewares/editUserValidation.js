const {check} = require("express-validator")
const db = require('../database/models')

module.exports=[
    check("Nombre")
        .notEmpty().withMessage("Debes completar este campo").bail()
        .isLength({min:2}).withMessage("El Nombre debe tener al Menos 2 caracteres "),
    check("Apellido")
        .notEmpty().withMessage("Debes completar este campo").bail()
        .isLength({min:2}).withMessage("El Apellido debe tener al Menos 2 caracteres "),
    check("telefono")
        .notEmpty().withMessage("Debes completar este campo").bail(),
    check("provincia")
        .notEmpty().withMessage("Debes seleccionar una provincia"),
    check("localidad")
        .notEmpty().withMessage("Debes seleccionar una localidad"),
    ]