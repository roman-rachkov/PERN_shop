const ApiError = require('../error/ApiError')
const JWT = require('jsonwebtoken')
const {User, Basket, Role} = require('../models')
const {hash, verify} = require('../helpers/passwordHasher')

const generateJWT = async (user) => {
    return JWT.sign(
        {id: user.id, email: user.email, roles: await user.getRoles()},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Wrong user data!'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Email has been registered'))
        }
        const hashPassword = await hash(password);
        const [role, created] = await Role.findOrCreate({where: {title: 'User'}})
        const user = await User.create({
            email,
            password: hashPassword,
        })
        await user.addRole(role)

        const basket = await Basket.create({userId: user.id})
        const token = await generateJWT(user);

        return res.status(201).json({token})

    }

    async login(req, res, next) {
        const {email, password} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Wrong user data!'))
        }
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.badRequest('User not found!'))
        }

        const canLogin = await verify(password, user.password)
        if (!canLogin) {
            return next(ApiError.badRequest('Wrong user data!'))
        }

        const token = await generateJWT(user);

        return res.status(200).json({token})

    }

    async check(req, res, next) {
        const user = await User.findOne({where: {id: req.user.id}});
        const token = await generateJWT(user)
        console.log(token)
        res.status(200).json({token});
    }
}

module.exports = new UserController()