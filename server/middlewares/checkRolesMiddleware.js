const JWT = require('jsonwebtoken')
const ApiError = require('../error/ApiError')
const {User, Role} = require("../models");

module.exports = (roles) => {
    return async (req, res, next) => {
        if (req.method === 'OPTIONS') {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                throw new ApiError.badRequest('no token')
            }
            const {id} = JWT.verify(token, process.env.SECRET_KEY)

            const user = await User.findOne({
                where: {id},
                include: [{model:Role, as: 'roles'}]
            })
            const userRoles = user.roles.map(r => r.title);

            let hasRole = false;
            userRoles.forEach(userRole => {
                if (hasRole) {
                    return;
                }
                if (Array.isArray(roles)) {
                    roles.forEach(role => {
                        if (hasRole) {
                            return;
                        }
                        if (role.toLowerCase() === userRole.toLowerCase()) {
                            hasRole = true;
                            return;
                        }
                    })
                } else {
                    if (roles.toLowerCase() === userRole.toLowerCase()) {
                        hasRole = true
                        return;
                    }
                }
            })

            if (!hasRole) {
                throw ApiError.forbidden('No permissions')
            }

            next()
        } catch (e) {
            res.status(403).json(`Forbidden: ${e.message}`);
        }
    }
}



