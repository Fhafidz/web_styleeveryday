const { checkSchema } = require('express-validator');

const schema = {
  username: {
    in: ['body'],
    notEmpty: {
      errorMessage: "Username must not be empty",
    },
    isLength: {
      options: {
        min: 3,
        max: 255,
      },
      errorMessage: "Username must be 3-255 characters long",
    },
  },
  email: {
    in: ['body'],
    notEmpty: {
      errorMessage: "Email must not be empty",
    },
    isEmail: {
      errorMessage: "Must be a valid Email",
    },
    isLength: {
      options: {
        max: 255,
      },
      errorMessage: "Email not more than 255 characters",
    },
  },
  password: {
    in: ['body'],
    notEmpty: {
      errorMessage: "Password must not be empty",
    },
    isLength: {
      options: {
        min: 6,
        max: 128,
      },
      errorMessage: "Password must be 6-128 characters long",
    },
  },
};

module.exports = checkSchema;
