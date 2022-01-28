
module.exports= (req,res,next)=>{
    if(req.cookies.recuerdame !== undefined && req.session.userLog === undefined){
      req.session.userLog = req.cookies.recuerdame
        
       
    }
    next()
}