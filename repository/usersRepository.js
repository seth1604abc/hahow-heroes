class UsersRepository {
    constructor(UsersModel) {
        this.UsersModel = UsersModel
    }

    async findByName() {
        return await this.UsersModel.findOne({
            where: {
                deleted: 0
            }
        });
    }
}

module.exports = UsersRepository;
