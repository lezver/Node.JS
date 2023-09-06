const { wrapperError, httpError } = require("../../helpers");
const { Dog } = require("../../models");

const remove = async (req, res) => {
	const { dogId } = req.params;

	const removeDog = await Dog.findByIdAndRemove(dogId);

	if (!removeDog) throw httpError(404, "Not found");

	return res.status(200).send(removeDog);
};

module.exports = { remove: wrapperError(remove) };
