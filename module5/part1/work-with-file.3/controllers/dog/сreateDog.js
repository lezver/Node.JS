const { Dog, createDogSchema } = require("../../models");
const { wrapperError, httpError } = require("../../helpers");

const create = async (req, res) => {
	const { error } = createDogSchema.validate(req.body);

	if (error) throw httpError(400, error.message);

	const { _id: owner } = req.user;

	// console.log(typeof owner);

	const result = await Dog.create({ ...req.body, owner });

	return res.status(201).send(result);

	// return res.status(201).send(await Dog.create(req.body));
};

module.exports = { create: wrapperError(create) };
