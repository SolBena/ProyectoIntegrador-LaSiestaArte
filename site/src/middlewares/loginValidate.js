const {check,body} = require("express-validator")
const db = require('../database/models')
module.exports=[
    check("email")
        .notEmpty().withMessage("Debes completar este campo").bail()
        .isEmail().withMessage("Tienes que completar el campo con un Email valido"),

    body('email')
    .custom((value) => {
        return db.Usuarios.findOne({
            where:{
                email: value.trim()
            }
        }).then(user => {
            if(!user ){
                return Promise.reject('El mail no existe en la base de datos')
            }
        })
    }),

    check("password")
        .notEmpty().withMessage("Debes completar este campo").bail()
        .isLength({min: 8}).withMessage("La contraseña debe contener 8 caracteres como mínimo"),
]