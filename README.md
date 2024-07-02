# Hahow Backend Engineer 徵才小專案

## Required

**Node.js** v16以上
**npm** 9.6.2
**Mysql** 8.0.0以上

## Installation

```json
npm install
```

此指令為安裝所有的依賴包

## Enviroment

```json
//server啟動時用的port號
PORT=
//環境名稱, 例: production 或 development
NODE_ENV=
// 以下為資料庫連線資訊
MYSQL_HOST=
MYSQL_USERNAME=
MYSQL_PASSWORD=
MYSQL_DB_HERO=
// 1 為 true 0 為 false
MYSQL_SSL=
// 1 為 true 0 為 false, 若為1, 則會重新建立資料表, 並插入兩筆示範資料, 請小心使用
MYSQL_SYNC=
```

請按照資料夾內 .example.env
自行創建 .env 檔案
若需要 development 或是 stage 環境則自行按照 package.json script 建立

## Start

```json
npm start
```

```json
\========================================================================================================================
PORT: [ 3000 ] - ENV: [ development ]
\========================================================================================================================
```

終端機出現以上文字代表啟動成功

## Structure

```json
project/
├── config/
│   ├── errors.config
│   └── ...
├── controllers/
│   ├── heroController.js
│   └── ...
|
├── middleware/
|   ├── authMiddleware.js
|   └── ...
|
├── service/
|   ├── heroService.js
|   └── ...
|
├── repository/
|   ├── heroRepository.js
|   └── usersRepository.js
|
├── models/
│   ├── hero/
│   │   ├── Hero.js
│   │   ├── Profile.js
│   │   └── index.js
│   └── ...
├── routes/
│   ├── heroRoute.js
│   └── ...
└── ...
```
