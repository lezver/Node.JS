require("dotenv").config();

const nodemailer = require("nodemailer");

const { MAILTRAP_USER, MAILTRAP_PASSWORD } = process.env;

const transport = nodemailer.createTransport({
	host: "sandbox.smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: MAILTRAP_USER,
		pass: MAILTRAP_PASSWORD,
	},
});

transport
	.sendMail(message)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));
