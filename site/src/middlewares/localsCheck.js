module.exports = (req, res, next) => {
    if (req.session.userLog){
        res.locals.user = req.session.userLog
    }
    next()
}