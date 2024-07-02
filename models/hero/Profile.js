module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Profile', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        heroesId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'heroes_id'
        },
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'strength'
        },
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'intelligence'
        },
        agile: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'agile'
        },
        luck: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'luck'
        },
        deleted: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        tableName: 'profile',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
        timestamps: true
    })
}
