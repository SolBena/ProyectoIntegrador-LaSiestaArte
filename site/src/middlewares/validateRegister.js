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
    check("email")
        .isEmail().withMessage("Tienes que completar el campo con un Email valido").bail()
        .custom(value=>{
            return db.Usuarios.findOne({
                where: {
                    email: value
                }
            }).then(user=>{
                if(user){
                    return Promise.reject("El email ya esta registrado")
                }
            })
        }),
    check("password")
        .notEmpty().withMessage("Debes completar este campo").bail()
        .isLength({min: 8}).withMessage("La contraseña debe contener 8 caracteres") ,
    check("password2")
        .notEmpty().withMessage("Debes completar este campo").bail()  
        .isLength({min: 8}).withMessage("La contraseña debe contener 8 caracteres")
        .custom((confirmPassword, {req})=>{
            const password = req.body.password
            if(password !== confirmPassword){
                return false
            } else{
                return true
            }
        }).withMessage("las contraseñas deben ser iguales"),
    /* check("image").custom(({req})=>{
        if(req.fileValidationError){
            console.log(req.fileValidationError)
            return false
        } else {
            return true
        }
    }).withMessage("solo imagenes") */
]