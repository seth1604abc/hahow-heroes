class HeroRepository {
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

    async findById(id) {
        return await this.HeroesModel.findOne({
            where: {
                deleted: 0,
                id,
            }
        })
    }
}

module.exports = HeroRepository;
