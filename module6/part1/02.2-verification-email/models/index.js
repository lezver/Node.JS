const { Dog, createDogSchema } = require("./dog");
const { User, registerSchema, loginSchema, emailSchema } = require("./user");

module.exports = {
	Dog,
	createDogSchema,
	User,
	registerSchema,
	loginSchema,
	emailSchema,
};
