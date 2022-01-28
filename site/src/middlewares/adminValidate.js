module.exports = (req, res, next) => {
    if (req.session.userLog) {
        if (req.session.userLog.id_rol === 2) {
            return next()
        }
        res.redirect("/")

    } else {
        res.redirect("/")
    }

    /*  if (req.session.userLog.id_rol === 2  ){
        next()
    } else {
        console.log(req.session.userLog.id_rol );
        res.redirect("/users/Miperfil")
    } */
}