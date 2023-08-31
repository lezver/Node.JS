const { wrapperError, httpError } = require("../../helpers");
const { Dog } = require("../../models");

const chengeHeight = async (req, res) => {
	const { dogId } = req.params;

	if (!Object.keys(req.body).length)
		throw httpError(400, "Missing field:Height");

	const chengeHeightDog = await Dog.findByIdAndUpdate(dogId, req.body, {
		new: true,
	});

	if (!chengeHeightDog) throw httpError(404, "Not found");

	return res.status(200).send(chengeHeightDog);
};

module.exports = { chengeHeight: wrapperError(chengeHeight) };
