
const db = require('../database/models')
const Op= db.Sequelize.Op;

module.exports={
    index:function(req, res, next) {
      let productos = db.Productos.findAll({include:["productosIm"],limit:4})
      let categorias = db.Categorias.findAll()
      Promise.all([productos,categorias])
      .then(([productos,categorias])=>{
        
        res.render('home/home',{categorias,productos});
      })
      .catch(err=>{
        res.send(err)
      })
      },

    about:(req,res,next)=>{
      res.render("home/aboutus")
    },

    search:(req,res,next)=>{
      let search= req.query.keywords.trim()
      db.Productos.findAll({
        where:{nombre:{[Op.like]:`%${search}%`}},
        include:["productosIm"]
      })
      .then(productos=>{
        res.render("home/search",{productos, busqueda:search})
      })
      .catch(err=>{
        res.send(err)
      })

    },

    contacto:(req, res, next) => {
      res.render('home/contacto')
    }

  }