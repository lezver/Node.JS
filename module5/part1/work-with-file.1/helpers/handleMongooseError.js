const handleMongooseError = (err, data, next) => {
	err.satus = 400;
	next();
};

module.exports = handleMongooseError;
