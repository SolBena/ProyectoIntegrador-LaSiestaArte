const fs = require('fs');
const path = require('path');

const db = require("../database/models");
/* const { products } = require("./productsController"); */
const { validationResult } = require("express-validator")

module.exports = {
  list: function (req, res, next) {
    db.Productos.findAll({
      include: [
        { association: "categoriasPr" },
        { association: "productosIm" }
      ]
    })
      .then(productos => {
        res.render('admin/admin', { productos })
      })
      .catch((error) => {
        res.send(error)
      })

  },

  ////crear
  create: function (req, res, next) {
    db.Categorias.findAll({
      include: [{ association: "categoriasPr" }]
    })
      .then(categorias => {

        res.render('admin/create', { categorias });
      })
      .catch((error) => {
        res.send(error)
      })
  }
  ,

  newProduct: (req, res, next) => {
    db.Categorias.findAll({
      include: [{ association: "categoriasPr" }]
    })
    const errors = validationResult(req)
    if (req.fileValidationError) {
      let image = {
        param: 'image',
        msg: req.fileValidationError,
      }
      errors.errors.push(image)
    }
    let object = (req.body)
    if (errors.isEmpty()) {
      db.Productos.create({
        nombre: object.titulo,
        descripcion: object.descripcion,
        precio: object.precio,
        id_categoria: object.categoria,
      })
        .then(resultado => {
          if (req.files.length > 0) {
            const images = req.files.map(image => {
              let img = {
                nombre: image.filename,
                id_producto: resultado.id
              }
              return img
            })
            db.Imagen.bulkCreate(images, { validate: true })
              .then(() => console.log("imagenes agregadas"))
              .catch(err => {
                res.send(err)
              })
          } else {
            db.Imagen.create({
              id_producto: resultado.id,
              nombre: "userDefault.jpeg"
            })
          }

          /* db.Imagen.create({
            id_producto: resultado.id,
            nombre: req.file ? req.file.filename : "userDefault.jpeg",
          }) */
          res.redirect(`/products/detail/${resultado.id}`)
        })
        .catch((error) => {
          res.send(error)
        })

    } else {

      db.Categorias.findAll({
        include: [{ association: "categoriasPr" }]
      })
        .then(categorias => {

          res.render('admin/create', { categorias, errors: errors.mapped(), old: req.object })
        })
        .catch((error) => {
          res.send(error)
        })
        ;
    }
  },

  //edit
  edit: function (req, res, next) {

    const { id } = req.params
    let productEdit = db.Productos.findByPk(id, { include: [{ association: "productosIm" }] });
    let categorias = db.Categorias.findAll();


    Promise.all([productEdit, categorias])
      .then(([productEdit, categorias]) => {

        res.render('admin/edit', { productEdit, categorias });

      })
      .catch((error) => {
        res.send(error)
      })

  },

  update: (req, res, next) => {


    const errors = validationResult(req);
    if (req.fileValidationError) {
      let image = {
        param: 'image',
        msg: req.fileValidationError,
      }
      errors.errors.push(image)
    }

    if (errors.isEmpty()) {

      db.Productos.update({
        nombre: req.body.titulo,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        id_categoria: req.body.categoria,
      }, {
        include: [{ association: "productosIm" }],
        where: { id: req.params.id }
      })
        .then(resultado => {
          if (req.files.length > 0) {
            let images = req.files.map(image => {
              return {
                nombre: image.filename,
                id_producto: req.params.id
              }
            })
            db.Imagen.findAll({
              where: {
                id_producto: req.params.id
              }
            })
              .then(imagenes => {
                imagenes.forEach(imagen => {
                  fs.unlinkSync(path.join(__dirname, '../../public/img/products/' + imagen.nombre))
                })
                db.Imagen.destroy({
                  where: { id_producto: req.params.id }
                })
                  .then(() => {
                  db.Imagen.bulkCreate(images)
            
                  })
                    .then(()=>{
                    res.redirect(`/products/detail/${+req.params.id}`)
                    })
                    .catch((err) => {
                      res.send(err + "1")
                    })

              })
          }
          else{
            res.redirect(`/products/detail/${+req.params.id}`)
          }
        })
        .catch((error) => {
          res.send(error + "2")
        })
    } else {

      const { id } = req.params
      let productEdit = db.Productos.findByPk(id, { include: [{ association: "productosIm" }] });
      let categorias = db.Categorias.findAll();


      Promise.all([productEdit, categorias])
        .then(([productEdit, categorias]) => {

          res.render('admin/edit', { productEdit, categorias, errors: errors.mapped(), old: req.body })

        })

    }
  },

  //borrar
  destroy: (req, res, next) => {
    db.Imagen.findAll({
      where: {
        id_producto: req.params.id
      }
    })
      .then(imagenes => {
        for (let i = 0; i < imagenes.length; i++) {
          fs.existsSync(path.join(__dirname, '../../public/img/products/' + imagenes[i].nombre)) ? fs.unlinkSync(path.join(__dirname, '../../public/img/products/' + imagenes[i].nombre)) : null
        }
      })

    db.Imagen.destroy({
      where: {
        id_producto: req.params.id
      }
    })
      .then(result => {
        db.Productos.destroy({
          where: {
            id: req.params.id
          }
        })
        return res.redirect("/admin")
      })
      .then(result => {
        db.Productos.destroy({
          where: {
            id: req.params.id
          }
        })
        return res.redirect("/")
      })
      .catch((error) => {
        res.send(error)
      })
  }



}
