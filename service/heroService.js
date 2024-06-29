class HeroService {
    constructor(heroesRepository) {
      this.heroesRepository = heroesRepository;
    }
  
    async getAllHero() {
      return await this.heroesRepository.findAllHero();
    }
}
  
module.exports = HeroService;
  