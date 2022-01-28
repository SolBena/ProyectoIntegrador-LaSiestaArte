const multer = require("multer");
const path = require("path");



 
    const storage = multer.diskStorage({
        destination: function ( req, file, cb){
            cb(null, path.join(__dirname, "/../../public/img/users"))
        
    },
         filename: function (req, file, cb) {
            cb(null, "img" + Date.now() + path.extname(file.originalname))
        }
        } )

    const fileFilter=(req,file, cb)=>{
            
        if(file){
            console.log(file)
            if (!file.originalname.match(/\.(jpg|jpeg|png|webp)$/) ){
                req.fileValidationError = "Solo se permiten Imagenes"
                return cb(null,false, req.fileValidationError)
            } else {
                return cb (null, true)
            }
        } else {
            return cb (null, true)
        }
            
        }
           
        
        let upload = multer({storage, fileFilter
        });
           module.exports  = upload


