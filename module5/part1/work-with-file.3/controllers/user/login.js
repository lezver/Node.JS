const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const { wrapperError, httpError } = require("../../helpers");
const { SECRET_KEY } = process.env;
const incorrect = "Email or password incorrect";

const login = async (req, res) => {
	const { email, password } = req.body;

	const compareUser = await User.findOne({ email });
	if (!compareUser) throw httpError(401, incorrect);

	const compareUserPassword = await bcrypt.compare(
		password,
		compareUser.password
	);
	if (!compareUserPassword) throw httpError(401, incorrect);

	const payload = {
		id: compareUser._id,
	};

	const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 3600 });

	await User.findByIdAndUpdate(compareUser._id, { token });

	return res.status(201).send({ token });
};

module.exports = { login: wrapperError(login) };
