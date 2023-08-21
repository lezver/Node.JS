const checkAuth = (request, response, next) => {
	const apiKey = request.query["api-key"];
	console.log(apiKey);

	if (apiKey === "qwer") {
		return next();
	}

	response.status(401).send("Unauthorized");
};

module.exports = checkAuth;
