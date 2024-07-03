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
// 1 為 true 0 為 false, 若為1, 則會重新建立資料表, 並插入示範資料, 請小心使用
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

終端機出現以上文字代表啟動成功 (可自行註解)

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

按照依賴式注入的設計模式
將 Route Controller Service Repository 分開
達成鬆耦和, 提高可測試性以及可維護性

## Libraries

-   bcrypt
    用於hash加密
-   cors
    cors設定
-   dotenv
    環境變數設定
-   express
    http server框架
-   mysql2
    連接mysql
-   sequelize
    Node.js 的 ORM, 用於跟資料庫互動
-   supertest
    測試程式用
-   cross-env
    用於處理跨平台script, 像是 mac 跟 windows
-   jest
    測試程式用
-   nodemon
    開發用, 監測文件, 若有改變可自動重啟
-   prettier
    為程式碼規範排版用
-   eslint-plugin-prettier
    為程式碼規範排版用
-   eslint
    為程式碼規範排版用
-   eslint-config-prettier
    為程式碼規範排版用

## 註解

會註解的情況

1. 這段code很重要, 不可輕易更改
2. 邏輯不好理清, 可能是功能較為複雜
3. 特別標註, 可能是待優化, 待修改之類的

寫註解的原則就是寫得清楚, 要看的懂

## 困難

因較多使用NestJS框架, 這次用純JS去做才了解框架幫我們做了很多事
但這次從頭開始做也幫助我可以更了解全方面, 像是手動依賴式注入, 全面捕捉錯誤等等....
以現在的學習資源像是影片課程或是AI, 大部分都能解決問題
但較困難的會是系統架構以及程式碼的紀律性, 這方面我還有待學習
也可以多看一些開源程式碼的架構去模仿
