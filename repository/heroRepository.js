class HeroRepository {
    constructor(HeroesModel, ProfileModel) {
        this.HeroesModel = HeroesModel
        this.ProfileModel = ProfileModel
    }

    async findAllHero() {
        return await this.HeroesModel.findAll({
            where: {
                deleted: 0
            }
        });
    }

    async findAllHeroWithProfile() {
        return await this.HeroesModel.findAll({
            include: [
                {
                    model: this.ProfileModel,
                }
            ],
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

    async findByIdWithProfile(id) {
        return await this.HeroesModel.findOne({
            include: [
                {
                    model: this.ProfileModel,
                }
            ],
            where: {
                deleted: 0,
                id,
            }
        })
    }
}

module.exports = HeroRepository;
