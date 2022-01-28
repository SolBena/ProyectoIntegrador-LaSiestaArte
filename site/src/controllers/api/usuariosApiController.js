const db = require('../../database/models')

module.exports={
    usuarioRegistrado:
    async (req,res)=>{
        try{
            let data = await db.Usuarios.findAll({
                where: {email:req.query.email}
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
    
     /* async (req,res)=>{
        try{    
            await db.Usuarios.findOne({
                where: {
                    email: req.query.email
                }
            })
            let response = {
                status : 200,
                message : 'Mail ya registrado',
                data: true
            }
            return res.status(201).json(response)

        }catch (error) {
            return res.status(400).json({
                status : 400,
                message : error
            })
        }
    } */
}