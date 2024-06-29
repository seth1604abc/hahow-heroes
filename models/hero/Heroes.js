const { DataTypes } = require('sequelize')
const { heroSequelize } = require('./connect')

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Heroes', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            field: 'id'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'name'
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'image'
        },
        deleted: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        tableName: 'heroes',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        timestamps: true
    })
}