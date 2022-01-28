
const db = require('../database/models')


module.exports = {
    carrito: function(req, res, next) {
     let productos= db.Productos.findAll({
        include: [
          {association: "categoriasPr"},
          {association: "productosIm"}
        ]
      })
      let relacionados= db.Productos.findAll({
        include: [
          {association: "categoriasPr"},
          {association: "productosIm"}
        ],
        limit: 6
      })
      Promise.all([productos,relacionados])
      .then(([productos, relacionados])=>{
        res.render('products/carrito',{productos, relacionados});


      }
      )
      .catch((error) => {
        res.send(error)
    })},
  
    store: function(req, res, next) {

      let productos= db.Productos.findAll({
        include: [
          {association: "categoriasPr"},
          {association: "productosIm"}
        ]
      })
      let categorias= db.Categorias.findAll({
        include: [{ association: "categoriasPr" }]
      })
      Promise.all([productos,categorias])
      .then(([productos, categorias])=>{
        res.render('products/products',{productos, categorias})

      })
      .catch((error) => {
        res.send(error)
      })

      /* db.Productos.findAll(
        {
        include: [
          {association: "categoriasPr"},
          {association: "productosIm"}
        ]
      }
      )
        .then(products => {
          res.render('products/products', { productos: products })
          
        })
        .catch(err => {
          res.send(err);
        }) */
    }, 
      
    detail: (req, res)=>{
      const {id}=req.params
      db.Productos.findByPk(+id,
        {
        include: [
          {association: "categoriasPr"},
          {association: "productosIm"}
        ]
      }
      )
      .then(resultado=>{
        db.Productos.findAll(
          {
            include: [
              {association: "categoriasPr"},
              {association: "productosIm"}
            ],
            where:{id_categoria:resultado.id_categoria},
            limit: 6
          }
        )
        .then(relacionados=>{
          res.render("products/detalle", {producto: resultado , relacionados})
        })
        .catch(err=>{
          res.send(err)
        })

      })
      .catch(err=>{
        res.send(err)
      })
     ;
      
        
        
    },

    categoria: (req,res)=>{
      let {categoria}= req.params
      let selecCategoria=db.Categorias.findOne({
        where:{
          href: categoria
        }, 
        include: [{association: "categoriasPr"}]
      });
      let productos=db.Productos.findAll({
        include:[{association: "categoriasPr"}, {association:"productosIm"}]
      });
      Promise.all([selecCategoria,productos])
      .then(([selecCategoria,productos])=>{

        res.render('products/categorias',{selecCategoria, productos})
      })
      .catch((error) => {
        res.send(error)
    })
    },

}