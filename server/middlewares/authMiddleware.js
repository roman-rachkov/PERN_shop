const JWT = require('jsonwebtoken')
const ApiError = require("../error/ApiError");

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            throw ApiError.badRequest('no token')
        }
        req.user = JWT.verify(token, process.env.SECRET_KEY)
        next()
    } catch (e) {
        res.status(401).json({message: `Unauthenticated: ${e.message}`});
    }
}