const { Dog, createDogSchema } = require("../../models");
const { wrapperError, httpError } = require("../../helpers");

const update = async (req, res) => {
	const { dogId } = req.params;

	if (!Object.keys(req.body).length) throw httpError(400, "Missing fields");

	const updateDog = await Dog.findByIdAndUpdate(dogId, req.body, { new: true });

	if (!updateDog) throw httpError(404, "Not found");

	return res.status(200).send(updateDog);
};

module.exports = { update: wrapperError(update) };
