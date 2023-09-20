const bcrypt = require("bcrypt");
const crypto = require("node:crypto");
const { User } = require("../../models");
const { wrapperError, httpError, sendEmail } = require("../../helpers");

const register = async (req, res) => {
	const { name, email, password } = req.body;

	const user = await User.findOne({ email }).exec();

	if (user !== null) throw httpError(409, "User already exists");

	const passwordHash = await bcrypt.hash(password, 10);
	const verifyToken = crypto.randomUUID();

	await User.create({ name, email, password: passwordHash, verifyToken });

	await sendEmail({
		to: email,
		subject: `Welcome on board, ${name}`,
		html: `
		<p>To confirm your registration, please click on the link below:</p>
		<a href="http://localhost:6666/api/auth/verify/${verifyToken}">Click me</a>
		`,
		text: `To confirm your registration, please click on the link below:\n
		http://localhost:6666/api/auth/verify/${verifyToken}`,
	})
		.then((res) => console.log(res))
		.catch((err) => console.error(err));

	return res.status(201).end("Registration successful");
};

module.exports = { register: wrapperError(register) };
