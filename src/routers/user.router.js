const express = require("express");
const router = express.Router();
const userController = require("../app/controllers/user.controller");

router.get("/:id",  userController.show);
router.get("/", userController.index);
router.post("/", userController.create);

module.exports = router;
