const express = require('express')
const app = express()
const authMiddleware = require('./middleware/authMiddleware')
const { heroConnect } = require('./models/hero/connect')

const envFile = process.env.ENV_FILE;
if (envFile && envFile !== 'production') {
	require('dotenv').config({ path: `.env.${envFile}` });
} else {
    require('dotenv').config();
}

// 功能初始化
(async () => {
    // 資料庫 [Hero] 連線初始化
    await heroConnect()
})()

app.get('/', (req, res) => {
    return res.status(200).send('ok')
})

app.use('/heroes', authMiddleware, require('./route/heroRoute'))

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).json();
});

// 印出目前使用的PORT以及ENV環境
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log();
	console.log('+' + ''.padEnd(120, '=') + '+');
	console.log(
		''.padEnd(20, ' '),
		`PORT: [ ${PORT} ] -`,
		`ENV: [ ${process.env.NODE_ENV} ]`,
		''.padEnd(20, ' '),
	);
	console.log('+' + ''.padEnd(120, '=') + '+');
})