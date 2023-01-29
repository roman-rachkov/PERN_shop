const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
})

const UserRole = sequelize.define('user_role', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
})

const Role = sequelize.define('role', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true},
})

const Permission = sequelize.define('permission', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    action: {type: DataTypes.STRING, unique: true},
    value: {type: DataTypes.BOOLEAN, defaultValue: false}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    // user_id: {type: DataTypes.BIGINT},
})

const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER, defaultValue: 1, validate: {min: 1}},
    // device_id:{type:DataTypes.BIGINT},
    // user_id:{type:DataTypes.BIGINT}
})

const Device = sequelize.define('device', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.FLOAT, allowNull: false},
    primaryImageId: {type: DataTypes.BIGINT, allowNull: 0}
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, defaultValue: 5, validate: {min: 0, max: 5}},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const Image = sequelize.define('image', {
    id: {type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true},
    filename: {type: DataTypes.STRING, allowNull: false}
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.belongsToMany(Role, {through: UserRole})
Role.belongsToMany(User, {through: UserRole})

Role.belongsToMany(Permission, {through: 'role_permission'})
Permission.belongsToMany(Role, {through: 'role_permission'})

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(DeviceInfo, {as: 'info'})
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: 'type_brand'})
Brand.belongsToMany(Type, {through: 'type_brand'})

Image.belongsTo(Device)
Device.hasMany(Image)
Device.hasOne(Image)

module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    DeviceInfo,
    Type,
    Brand,
    Rating,
    Role,
    Permission,
    Image
}