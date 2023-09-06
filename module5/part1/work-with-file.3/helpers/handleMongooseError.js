const handleMongooseError = (err, data, next) => {
	const { name, code } = err;

	const status = name === "MongoServerError" && code === 11000 ? 409 : 400;

	err.satus = status;

	next();
};

module.exports = handleMongooseError;
