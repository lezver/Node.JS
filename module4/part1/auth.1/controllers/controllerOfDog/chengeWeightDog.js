const { wrapperError, httpError } = require("../../helpers");
const { Dog } = require("../../models");

const chengeWeight = async (req, res) => {
	const { dogId } = req.params;

	if (!Object.keys(req.body).length)
		throw httpError(400, "Missing fiend: Weight");

	const chengeWeightDog = await Dog.findByIdAndUpdate(dogId, req.body, {
		new: true,
	});

	if (!chengeWeightDog) throw httpError(404, "Not found");

	return res.status(200).send(chengeWeightDog);
};

module.exports = { chengeWeight: wrapperError(chengeWeight) };
