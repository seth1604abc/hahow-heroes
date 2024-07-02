const express = require('express')
const app = express()
const cors = require('cors')
const authMiddleware = require('./middleware/authMiddleware')
const { heroConnect, models, heroSequelize } = require('./models/hero/db')

const envFile = process.env.ENV_FILE;
if (envFile && envFile !== 'production') {
	require('dotenv').config({ path: `.env.${envFile}` });
} else {
    require('dotenv').config();
}

// 功能初始化
(async () => {
    // 資料庫 [Hero] 連線測試
    await heroConnect()
	// 資料庫 [Hero] 資料表Sync
	if (process.env.MYSQL_SYNC == 1) {
		await heroSequelize.sync({ force: true })
		await models.Heroes.create({ name: 'Daredevil', image: 'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg' })
		await models.Profile.create({ heroesId: 1, strength: 2, intelligence: 7, agile: 9, luck: 7 })
		await models.Heroes.create({ name: 'Thor', image: 'http://x.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg' })
		await models.Profile.create({ heroesId: 2, strength: 8, intelligence: 2, agile: 5, luck: 9 })
	}
})()

app.use(express.json());
app.use(cors())


// 測試用, 或某些服務需要check health
app.get('/', (req, res) => {
    return res.status(200).send('ok')
})

// 設置route
app.use('/heroes', authMiddleware, require('./route/heroRoute'))

// 全局捕捉error
app.use((err, req, res, next) => {
    // console.error(err.stack);
    // console.error(err.statusCode);
    res.status(err.statusCode || 500).json();
});

// 印出目前使用的PORT以及ENV環境
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    // console.log();
	// console.log('+' + ''.padEnd(120, '=') + '+');
	// console.log(
	// 	''.padEnd(20, ' '),
	// 	`PORT: [ ${PORT} ] -`,
	// 	`ENV: [ ${process.env.NODE_ENV} ]`,
	// 	''.padEnd(20, ' '),
	// );
	// console.log('+' + ''.padEnd(120, '=') + '+');
})

module.exports = app
