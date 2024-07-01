const { ValidationError } = require('../config/errors.config')

class HeroService {
    constructor(heroesRepository) {
      this.heroesRepository = heroesRepository;
    }
  
    async getAllHero(isAuth = false) {
        if (!isAuth) {
            const result = await this.heroesRepository.findAllHero();
            return result.map((h) => {
                return {
                    id: h.id.toString(),
                    name: h.name,
                    image: h.image
                }
            })
        }
        
        const result = await this.heroesRepository.findAllHeroWithProfile();
        return result.map((h) => {
            return {
                id: h.id.toString(),
                name: h.name,
                image: h.image,
                profile: h.Profile ? {
                    str: h.Profile.strength,
                    int: h.Profile.intelligence,
                    agi: h.Profile.agile,
                    luk: h.Profile.luck,
                } : undefined
            }
        })
        
    }

    async getSingleHero(id, isAuth = false) {
        const heroId = parseInt(id, 10)
        if (isNaN(heroId)) {
            throw new ValidationError('Invalid hero id')
        }

        if (isAuth) {
            return await this.heroesRepository.findByIdWithProfile(id)
        }

        return await this.heroesRepository.findById(id)
    }
}
  
module.exports = HeroService;
  