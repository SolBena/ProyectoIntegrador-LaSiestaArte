const db = require('../../database/models')
const Op= db.Sequelize.Op;


module.exports={
    buscar:
    async (req,res)=>{
        try{
            let data = await db.Productos.findAll({
                include: [
                    {association: "productosIm"}
                  ],
                where: {nombre: {[Op.like]:`%${req.query.buscar}%`}}
            })
            let response={
                status:200,
                message:"ok",
                data
            }
            res.status(201).json(response)
        }catch (error){
            return res.status(400).json({
                status : 400,
                message : error
            })
        }
    }
}