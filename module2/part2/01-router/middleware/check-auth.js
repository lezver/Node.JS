const checkAuth = (req, res, next) => {
	const apiKey = req.query["api-key"];

	if (apiKey === "123") return next();

	res.status(401).send("Unauthorized");
};

module.exports = checkAuth;
