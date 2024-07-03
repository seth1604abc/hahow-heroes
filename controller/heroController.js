const { NotFoundError } = require('../config/errors.config')

/**
 * @typedef {Object} HeroService
 * @property {Function} getAllHero
 * @property {Function} getSingleHero
 */
class HeroController {
    /**
     * 
     * @param {HeroService} heroService
     */
    constructor(heroService) {
        this.heroService = heroService;
    }
  
    getHeroList = async (req, res) => {
        const isAuth = req.isAuth ?? false
        const heroesList = await this.heroService.getAllHero(isAuth)
        res.status(200).send({
            heroes: heroesList
        })
    }

    getSingleHero = async (req, res) => {  
        const isAuth = req.isAuth ?? false  
        const hero = await this.heroService.getSingleHero(req.params.id, isAuth)
        if (!hero) {
            throw new NotFoundError('hero id not exist')
        }
        res.status(200).send(hero)
    }
}
  
module.exports = HeroController;
