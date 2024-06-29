class HeroController {
    constructor(heroService) {
        this.heroService = heroService;
        console.log(this.heroService)
    }
  
    async getHeroList(req, res) {
        console.log(this.heroService)
        const heroList = await this.heroService.getAllHero()

        res.send(heroList)
    }
}
  
module.exports = HeroController;