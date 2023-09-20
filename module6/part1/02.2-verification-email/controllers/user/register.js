const bcrypt = require("bcrypt");
const { User, registerSchema } = require("../../models");
const { wrapperError, httpError, sendEmail } = require("../../helpers");
const gravatar = require("gravatar");
const crypto = require("node:crypto");

const { BASE_URL } = process.env;

const register = async (req, res) => {
	const { error } = registerSchema.validate(req.body);
	if (error) throw httpError(400, error.message);

	const { name, email, password } = req.body;
	const user = await User.findOne({ email });
	if (user) throw httpError(409, "Email already in use");

	const hashPassword = await bcrypt.hash(password, 10);
	const avatarURL = gravatar.url(email);
	const verificationCode = crypto.randomUUID();

	const newUser = await User.create({
		name,
		email,
		password: hashPassword,
		avatarURL,
		verificationCode,
	});

	const verifyEmail = {
		to: email,
		subject: "Verify email",
		html: `
		<p>To confirm your registration, please click on the link below:</p>
		<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationCode}">Click me</a>
		`,
		text: `To confirm your registration, please click on the link below:\n
		${BASE_URL}/api/auth/verify/${verificationCode}`,
	};

	await sendEmail(verifyEmail);

	res.status(201).send(newUser);
};

module.exports = { register: wrapperError(register) };
