const { wrapperError, httpError } = require("../../helpers");
const { Dog } = require("../../models");

const chengeAge = async (req, res) => {
	const { dogId } = req.params;

	if (!Object.keys(req.body).length) throw httpError(400, "Missing field: Age");

	const chengeAgeDog = await Dog.findByIdAndUpdate(dogId, req.body, {
		new: true,
	});

	return res.status(200).send(chengeAgeDog);
};

module.exports = { chengeAge: wrapperError(chengeAge) };
