const { ValidationError, NotFoundError } = require('../config/errors.config')

class HeroService {
    constructor(heroesRepository) {
      this.heroesRepository = heroesRepository;
    }
  
    async getAllHero() {
        const result = await this.heroesRepository.findAllHero();

        return result.map((h) => {
            return {
                id: h.id.toString(),
                name: h.name,
                image: h.image
            }
        })
    }

    async getSingleHero(id) {
        const heroId = parseInt(id, 10)
        if (isNaN(heroId)) {
            throw new ValidationError('Invalid hero id')
        }

        return await this.heroesRepository.findById(id)
    }
}
  
module.exports = HeroService;
  