const { Dog } = require("../../models");
const { wrapperError, httpError } = require("../../helpers");

const getById = async (req, res) => {
	const { dogId } = req.params;

	const foundDog = await Dog.findById(dogId).exec();

	if (!foundDog) throw httpError(404, "Not found");

	return res.status(200).send(foundDog);
};

module.exports = { getById: wrapperError(getById) };
