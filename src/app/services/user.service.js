const userRepository = require('../repositories/user.repository')

class UserService {
    constructor() {
    }

    async create(params) {
        const oldModel = await userRepository.findOne({$or: [{email: params.email}, {username: params.username}]})
        if (oldModel) {
            throw new Error('User existed', {status: 400})
        }
        return userRepository.create(params)
    }

    async index(req) {
        return userRepository.findAll()
    }
}
module.exports = new UserService()