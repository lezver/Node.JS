const { Dog } = require("../../models");
const { wrapperError } = require("../../helpers");

const getAll = async (req, res) => {
	const userId = req.user.id;

	const data = await Dog.find({ ownerId: userId }).exec();

	return res.status(200).send(data);
};

module.exports = { getAll: wrapperError(getAll) };
