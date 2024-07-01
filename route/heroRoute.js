const express = require('express')
const router = express.Router()
const asyncHandler = require('./asyncHandler')

const _heroController = require('../controller/heroController')
const _heroService = require('../service/heroService')
const _heroRepository = require('../repository/heroRepository')
const { models } = require('../models/hero/db')

const heroRepository = new _heroRepository(models.Heroes, models.Profile);
const heroService = new _heroService(heroRepository);
const heroController = new _heroController(heroService);

router.get('/', asyncHandler(heroController.getHeroList));
router.get('/:id', asyncHandler(heroController.getSingleHero));

module.exports = router