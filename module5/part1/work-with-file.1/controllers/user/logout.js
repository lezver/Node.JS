const { wrapperError } = require("../../helpers");
const { User } = require("../../models");

const logout = async (req, res, next) => {
	await User.findByIdAndUpdate(req.user.id, { token: null });

	return res.status(201).send({ message: "You are logout" });
};

module.exports = { logout: wrapperError(logout) };
