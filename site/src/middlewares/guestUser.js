module.exports = (req, res, next) => {
    if (req.session.userLog === undefined){
        next()
    } else {
        res.redirect('/users/Miperfil')
    }
}