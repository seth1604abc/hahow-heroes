const express = require('express');
const router = express.Router()
const bcrypt = require('bcrypt')

const initHeroModels = require('../models/hero/index')
const { heroSequelize } = require('../models/hero/connect')
const heroesModel = initHeroModels(heroSequelize);
const _usersRepository = require('../repository/usersRepository')
const usersRepository = new _usersRepository(heroesModel.Users)
router.use(async (req, res, next) => {
    try {
        const headers = req.headers
        if (!headers.name || !headers.password) {
            next()
        }
        
        // 如果有name跟password則開始驗證
        const user = await usersRepository.findByName(headers.name)
        if (!user) {
            next()
            return
        }
    
        const match = await bcrypt.compare(headers.password, user.password)
        if (match) {
            req.isAuth = true
        }
        next()

    } catch(err) {
        next(err)
    }
});

module.exports = router