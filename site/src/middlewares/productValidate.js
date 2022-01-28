const {check} = require('express-validator');

module.exports = [
    check('titulo')
    .notEmpty().withMessage('Debes completar este campo').bail()
    .isLength({min: 5}).withMessage('El título debe tener al menos 5 caracteres'),
    
    check('precio')
    .notEmpty().withMessage('Debes completar este campo').bail()
    .isFloat().withMessage('Debes ingresar un valor numérico'),
   
    check('categoria')
    .notEmpty().withMessage('Debes seleccionar una categoría'),
    
    check('descripcion')
    .notEmpty().withMessage('Debes completar este campo').bail()
    .isLength({min: 20}).withMessage('La descripción debe tener al menos 20 caracteres'),
    
]