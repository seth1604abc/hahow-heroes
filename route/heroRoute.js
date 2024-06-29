const express = require('express')
const router = express.Router()

const _heroController = require('../controller/heroController')
const _heroService = require('../service/heroService')
const _heroRepository = require('../repository/heroRepository')
const initHeroModels = require('../models/hero/index')
const { heroSequelize } = require('../models/hero/connect')

const heroesModel = initHeroModels(heroSequelize);
const heroRepository = new _heroRepository(heroesModel.Heroes);
const heroService = new _heroService(heroRepository);
const heroController = new _heroController(heroService);

router.get('/', async (req, res) => {
    await heroController.getHeroList(req, res)
});

module.exports = router