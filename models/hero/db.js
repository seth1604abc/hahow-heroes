const { Sequelize } = require('sequelize');

const envFile = process.env.ENV_FILE;
if (envFile && envFile !== 'production') {
	require('dotenv').config({ path: `.env.${envFile}` });
} else {
    require('dotenv').config();
}

const heroSequelize = new Sequelize({
  dialect: 'mysql',
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_HERO,
  timezone: '+00:00',
  // logging: 'false',
  dialectOptions: {
    ssl: process.env.MYSQL_SSL == 1 ? true : undefined
  }
});

// 資料庫連接
// 若失敗則直接跳出
async function heroConnect() {
  try {
    await heroSequelize.authenticate()
    // console.log('Database [Hero] connection has been established successfully.')
  } catch (err) {
    // console.log('Database [Hero] connect failed:', err)
    process.exit(1)
  }
}

const { DataTypes } = require('sequelize')
const _Heroes = require('./Heroes')
const _Users = require('./Users')
const _Profile = require('./Profile')

// 初始化Models
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

const models = initHeroModels(heroSequelize)

module.exports = {
  heroSequelize,
  heroConnect,
  models,
};
