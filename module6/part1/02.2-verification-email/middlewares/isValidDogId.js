const { isValidObjectId } = require("mongoose");
const { httpError } = require("../helpers");

const isValidDogId = (req, res, next) => {
	const { dogId } = req.params;

	if (!isValidObjectId(dogId))
		next(httpError(400, `${dogId} - is not valid ID`));

	next();
};

module.exports = isValidDogId;
