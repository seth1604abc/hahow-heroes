class HeroesRepository {
    constructor(HeroesModel) {
        this.HeroesModel = HeroesModel
    }

    async findAllHero() {
        return await this.HeroesModel.findAll({
            where: {
                deleted: 0
            }
        });
    }
}

module.exports = HeroesRepository;
