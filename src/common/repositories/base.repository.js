
class BaseRepository {
    connectionName
    constructor(
        Model
    ){
        this.model = Model
    }

    async findAll(query) {
        return await this.model.find(query).lean()
    }

    async create(model) {
        return await this.model.create(model)
    }

    async createMany(models) {
        return await Promise.all(models.map(model => {
            return this.model.create(model)
        }))
    }

    async findOne(query) {
        return await this.model.findOne(query)
    }

}

module.exports = BaseRepository