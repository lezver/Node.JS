const { wrapperError, httpError } = require("../../helpers");
const { User } = require("../../models");

const verifyEmail = async (req, res) => {
	const { verificationCode } = req.params;

	const user = await User.findOne({ verificationCode }).exec();

	if (!user) throw httpError(401, "Email not found");

	await User.findByIdAndUpdate(user._id, {
		verify: true,
		verificationCode: null,
	});

	return res.status(200).send({ message: "Email verify success" });
};

module.exports = { verifyEmail: wrapperError(verifyEmail) };
