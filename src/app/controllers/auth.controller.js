const {validationResult} = require('express-validator');
const AuthService = require('../services/auth.service')
class AuthController {
    constructor(){
    }

    async signinWithPassword(req, res) {
        try {
            return await AuthService.signin(req.body)
        } catch (e) {
            
        }
    }
}

module.exports = new AuthController()