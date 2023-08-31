const { Dog } = require("../../models");
const { wrapperError } = require("../../helpers");

const getAll = async (req, res) => res.status(200).json(await Dog.find());

module.exports = { getAll: wrapperError(getAll) };
