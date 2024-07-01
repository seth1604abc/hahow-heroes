const express = require('express')
const router = express.Router()
const asyncHandler = require('./asyncHandler')

const _heroController = require('../controller/heroController')
const _heroService = require('../service/heroService')
const _heroRepository = require('../repository/heroRepository')
const initHeroModels = require('../models/hero/index')
const { heroSequelize } = require('../models/hero/connect')

const heroesModel = initHeroModels(heroSequelize);
const heroRepository = new _heroRepository(heroesModel.Heroes, heroesModel.Profile);
const heroService = new _heroService(heroRepository);
const heroController = new _heroController(heroService);

router.get('/', asyncHandler(heroController.getHeroList));
router.get('/:id', asyncHandler(heroController.getSingleHero));

module.exports = router