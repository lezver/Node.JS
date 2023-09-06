const bcrypt = require("bcrypt");
const { User, registerSchema } = require("../../models");
const { wrapperError, httpError } = require("../../helpers");
const gravatar = require("gravatar");

const register = async (req, res) => {
	const { error } = registerSchema.validate(req.body);
	if (error) throw httpError(400, error.message);

	const { name, email, password } = req.body;
	const user = await User.findOne({ email });
	if (user) throw httpError(409, "Email already in use");

	const hashPassword = await bcrypt.hash(password, 10);
	const avatarURL = gravatar.url(email);

	const newUser = await User.create({
		name,
		email,
		password: hashPassword,
		avatarURL,
	});

	res.status(201).send(newUser);
};

module.exports = { register: wrapperError(register) };
