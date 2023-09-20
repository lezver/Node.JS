const { getAll } = require("./getAllDogs");
const { getById } = require("./getByIdDog");
const { create } = require("./сreateDog");
const { update } = require("./updateDog");
const { chengeAge } = require("./chengeAgeDog");
const { chengeHeight } = require("./chengeHeightDog");
const { chengeWeight } = require("./chengeWeightDog");
const { remove } = require("./removeDog");

module.exports = {
	getAll,
	getById,
	update,
	create,
	chengeAge,
	chengeHeight,
	chengeWeight,
	remove,
};
