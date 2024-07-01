class UsersRepository {
    constructor(UsersModel) {
        this.UsersModel = UsersModel
    }

    async findByName(name) {
        return await this.UsersModel.findOne({
            where: {
                deleted: 0,
                name,
            }
        });
    }
}

module.exports = UsersRepository;
