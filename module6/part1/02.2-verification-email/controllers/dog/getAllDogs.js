const { Dog } = require("../../models");
const { wrapperError } = require("../../helpers");

const getAll = async (req, res) => {
	const { _id: owner } = req.user;

	const { page = 1, limit = 10 } = req.query;

	const skip = (page - 1) * limit;

	const result = await Dog.find({ owner }, "", { skip, limit })
		.populate("owner", "name email")
		.exec();

	return res.status(200).send(result);
};

module.exports = { getAll: wrapperError(getAll) };
