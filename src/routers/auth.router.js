const express = require("express");
const router = express.Router();
const authController = require("../app/controllers/auth.controller");

router.post('/signin', authController.signinWithPassword)

module.exports = router;
