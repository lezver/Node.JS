const { wrapperError, httpError } = require("../../helpers");
const { User } = require("../../models");

const verify = async (req, res) => {
	const { token } = req.params;

	const verifyUser = await User.findOne({ verifyToken: token }).exec();

	if (!verifyUser) throw httpError(401, "Invalid token");

	await User.findByIdAndUpdate(verifyUser._id, {
		verified: true,
		verifyToken: null,
	});

	return res.status(200).send({ message: "User verified " });
};

module.exports = { verify: wrapperError(verify) };
