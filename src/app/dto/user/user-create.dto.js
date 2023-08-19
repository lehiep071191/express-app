const { check } = require("express-validator");

let validateCreateUser = () => {
  return [
    check("username", "username does not Empty").not().isEmpty(),
    check("username", "username more than 6 degits").isLength({ min: 6 }),
    check("email", "Invalid does not Empty").not().isEmpty(),
    check("email", "Invalid email").isEmail(),
    check("dob", "Invalid birthday").isISO8601("yyyy-mm-dd"),
    check("password", "password more than 6 degits").isLength({ min: 6 }),
  ];
};

let validateUserLogin = () => {
  return [
    check("password", "password not empty").not().isEmpty(),
    check("username", "username not empty").not().isEmpty(),
  ];
};
let validate = {
  validateCreateUser: validateCreateUser,
};

module.exports = { validate };
