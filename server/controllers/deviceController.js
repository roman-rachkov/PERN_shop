const crypto = require("crypto");
const path = require("path");
const ApiError = require("../error/ApiError");

const {Device, Image, DeviceInfo} = require('../models')

class DeviceController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files

            let filename = crypto.randomUUID() + '.jpg';
            img.mv(path.resolve(__dirname, '..', 'static', filename))

            const image = await Image.create({filename})
            const device = await Device.create({name, price, brandId, typeId, primaryImageId: image.id});

            image.deviceId = device.id
            image.save();

            if(info){
                info = JSON.parse(info);
                info.forEach(i => {
                    DeviceInfo.create({
                              title: i.title,
                              description: i.description,
                              deviceId: device.id,
                    })
                })
            }


            return res.status(201).json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }

    }

    async getAll(req, res) {
        let {brandId, typeId, page, limit} = req.body

        page = page || 1;
        limit = limit || 9;

        let offset = page * limit - limit;

        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({limit, offset});
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({where: {typeId}, limit, offset});
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({where: {brandId}, limit, offset});
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({where: {brandId, typeId}, limit, offset});
        }
        return res.status(200).json(devices)
    }

    async getById(req, res, next) {
        const {id} = req.params

        if (!id) {
            return next(ApiError.badRequest('Field \'id\' required!'))
        }

        const device = await Device.findOne({
            where: {id},
            include: [
                {model: DeviceInfo, as: 'info'},
                {model: Image, as: 'images'},
            ]
        })

        if(!device){
            return next(ApiError.badRequest('Device not found.'))
        }

        return res.status(200).json(device)
    }
}

module.exports = new DeviceController()