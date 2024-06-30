const { NotFoundError } = require('../config/errors.config')

class HeroController {
    constructor(heroService) {
        this.heroService = heroService;
    }
  
    getHeroList = async (req, res) => {
        const heroesList = await this.heroService.getAllHero()

        res.status(200).send({
            heroes: heroesList
        })
    }

    getSingleHero = async (req, res) => {    
        const hero = await this.heroService.getSingleHero(req.params.id)
        if (!hero) {
            throw new NotFoundError('hero id not exist')
        }

        res.status(200).send(hero)
    }
}
  
module.exports = HeroController;