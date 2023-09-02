const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const { wrapperError, httpError } = require("../../helpers");

const incorrect = "Email or password incorrect";

const login = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email }).exec();

	if (!user) throw httpError(401, incorrect);

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) throw httpError(401, incorrect);

	const token = jwt.sign(
		{ id: user._id, name: user.name },
		process.env.JWT_SECRET,
		{
			expiresIn: 3600,
		}
	);

	await User.findByIdAndUpdate(user._id, { token });

	return res.status(200).send({ token });
};

module.exports = { login: wrapperError(login) };
