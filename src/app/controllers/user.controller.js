const userService = require("../services/user.service");
const {validationResult} = require('express-validator');
class UserController {
  async index(req, res) {
    const result = await userService.index();
    res.json(result);
  }

  async show(req, res) {
    const { id } = req.params;
    console.log(req.header);
    res.send("req");
  }

  async create(req, res, next) {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
    }
    try {
      const result = await userService.create(req.body);
      res.send(result);
    } catch (e) {
      res.status(400).send({ message: e.message })
    }
  }
}
module.exports = new UserController();
