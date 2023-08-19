const BaseRepository = require('../../common/repositories/base.repository')
const User = require('../../schemas/user.schema')

class UserRepository extends BaseRepository {
    constructor(
        
    ){super(User)}
}

module.exports = new UserRepository()