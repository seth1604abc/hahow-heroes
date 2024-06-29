const { DataTypes } = require('sequelize')
const _Heroes = require('./Heroes')

function initHeroModels(sequelize) {
    const Heroes = _Heroes(sequelize, DataTypes)

    return {
        Heroes
    }
}

module.exports = initHeroModels