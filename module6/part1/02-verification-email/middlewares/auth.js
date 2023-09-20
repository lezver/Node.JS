const jwt = require("jsonwebtoken");
const { httpError } = require("../helpers");
const { User } = require("../models");

const noProvide = "No token provided";
const noAuthorise = "You aren't authorise";

const auth = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) throw httpError(401, noProvide);

	const [bearer, token] = authHeader.split(" ", 2);

	if (!bearer) throw httpError(401, noProvide);

	jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
		if (err) {
			if (err.name === "TokenExpiredError" || err.name === "JsonWebTokenError")
				throw httpError(401, "Token Error");

			return next(err);
		}

		try {
			const user = await User.findById(decode.id);

			if (user.token !== token) httpError(401, noAuthorise);

			if (!user.verified) httpError(401, noAuthorise);

			req.user = { id: user.id, name: user.name };

			next();
		} catch (error) {
			next(error);
		}
	});
};

module.exports = auth;
