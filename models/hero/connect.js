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
    console.log(process.env.MYSQL_DB_HERO)
    await heroSequelize.authenticate()
    await heroSequelize.sync({ force: false })
    console.log('Database [Hero] connection has been established successfully.')
  } catch (err) {
    console.log('Database [Hero] connect failed:', err)
    process.exit(1)
  }
}

module.exports = {
  heroSequelize,
  heroConnect
};