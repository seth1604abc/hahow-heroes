const { DataTypes } = require('sequelize')
const _Heroes = require('./Heroes')
const _Users = require('./Users')

function initHeroModels(sequelize) {
    const Heroes = _Heroes(sequelize, DataTypes)
    const Users = _Users(sequelize, DataTypes)

    return {
        Heroes,
        Users
    }
}

module.exports = initHeroModels