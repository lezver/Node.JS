const bcrypt = require("bcrypt");
const { User } = require("../../models");
const { wrapperError, httpError } = require("../../helpers");

const incorrect = "Email or password incorrect";

const login = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email }).exec();

	if (!user) throw httpError(401, incorrect);

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) throw httpError(401, incorrect);

	return res.status(200).send({ token: "TOKEN" });
};

module.exports = { login: wrapperError(login) };
