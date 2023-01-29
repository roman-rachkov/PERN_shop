const ApiError = require('../error/ApiError')
const {Type} = require('../models')

class TypeController {
    async create(req, res, next) {
        const {title} = req.body
        if(!title){
            return next(ApiError.badRequest('Field \'title\' required!!!'))
        }
        const type = await Type.create({title})
        return res.status(201).json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll();
        return res.status(200).json(types);
    }
}

module.exports = new TypeController()