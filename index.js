const express = require('express')
const app = express()

const envFile = process.env.ENV_FILE;
if (envFile && envFile !== 'production') {
	require('dotenv').config({ path: `.env.${envFile}` });
} else {
    require('dotenv').config();
}

app.get('/', (req, res) => {
    return res.status(200).send('ok')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(); // 換行用
	console.log('+' + ''.padEnd(120, '=') + '+');
	console.log(
		''.padEnd(20, ' '),
		// `HOST: [ ${HOST} ] -`,
		`PORT: [ ${PORT} ] -`,
		`ENV: [ ${process.env.NODE_ENV} ]`,
		''.padEnd(20, ' '),
	);
	console.log('+' + ''.padEnd(120, '=') + '+');
})