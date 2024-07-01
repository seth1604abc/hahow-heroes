const { DataTypes } = require('sequelize')
const _Heroes = require('./Heroes')
const _Users = require('./Users')
const _Profile = require('./Profile')

function initHeroModels(sequelize) {
    const Heroes = _Heroes(sequelize, DataTypes)
    const Users = _Users(sequelize, DataTypes)
    const Profile = _Profile(sequelize, DataTypes)

    Heroes.hasOne(Profile, { foreignKey: 'heroesId' })
    Profile.belongsTo(Heroes, { foreignKey: 'heroesId' })

    return {
        Heroes,
        Users,
        Profile,
    }
}

module.exports = initHeroModels