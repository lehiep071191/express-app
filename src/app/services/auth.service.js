const userRepository = require("../repositories/user.repository");
const jwt = require('jsonwebtoken')

class AuthService {
  constructor() {

  }

  async signin(dto) {
    console.log(process.env.SECRECT_KEY)
    const { username, password } = dto;
    const user = await userRepository.findOne({
      $or: [{ email: username }, { username: username }],
    });
    if (!user) {
        throw new Error('user not existed')
    }
  }
}

module.exports = new AuthService();
