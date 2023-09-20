const { wrapperError, httpError, sendEmail } = require("../../helpers");
const { emailSchema, User } = require("../../models");
const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
	const { error } = emailSchema.validate(req.body);
	if (error) throw httpError(400, error.message);

	const { email } = req.body;

	const user = await User.findOne({ email }).exec();
	if (!user) throw httpError(401, "Email not found");
	if (user.verify) throw httpError(401, "Email already verify");
	const verifyEmail = {
		to: email,
		subject: "Verify email",
		html: `
		<p>To confirm your registration, please click on the link below:</p>
		<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationCode}">Click me</a>
		`,
		text: `To confirm your registration, please click on the link below:\n
		${BASE_URL}/api/auth/verify/${user.verificationCode}`,
	};
	await sendEmail(verifyEmail);
	return res.status(200).send({ message: "Verify email send success" });
};

module.exports = { resendVerifyEmail: wrapperError(resendVerifyEmail) };
