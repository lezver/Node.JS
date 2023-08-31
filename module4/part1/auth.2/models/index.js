const { Dog, createDogSchema } = require("./dog");
const { User, registerSchema, loginSchema } = require("./user");

module.exports = { Dog, createDogSchema, User, registerSchema, loginSchema };
