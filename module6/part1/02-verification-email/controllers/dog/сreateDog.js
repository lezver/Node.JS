const { Dog, createDogSchema } = require("../../models");
const { wrapperError, httpError } = require("../../helpers");

const create = async (req, res) => {
	const { error } = createDogSchema.validate(req.body);

	if (error) throw httpError(400, error.message);

	return res.status(201).send(await Dog.create(req.body));
};

module.exports = { create: wrapperError(create) };
