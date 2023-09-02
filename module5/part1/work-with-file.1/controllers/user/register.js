const bcrypt = require("bcrypt");
const { User } = require("../../models");
const { wrapperError, httpError } = require("../../helpers");

const register = async (req, res) => {
	const { name, email, password } = req.body;

	const user = await User.findOne({ email }).exec();

	if (user !== null) throw httpError(409, "User already exists");

	const passwordHash = await bcrypt.hash(password, 10);

	await User.create({ name, email, password: passwordHash });

	return res.status(201).end("Registration successful");
};

module.exports = { register: wrapperError(register) };
