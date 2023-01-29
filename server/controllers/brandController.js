const ApiError = require('../error/ApiError')
const {Brand} = require('../models')

class BrandController {
    async create(req, res, next) {
        const {title} = req.body
        if(!title){
            return next(ApiError.badRequest('Field \'title\' required!!!'))
        }
        const brand = await Brand.create({title})
        return res.status(201).json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll();
        return res.status(200).json(brands);
    }
}

module.exports = new BrandController()