const express = require("express");
const {
	getAll,
	getById,
	create,
	update,
	chengeAge,
	chengeHeight,
	chengeWeight,
	remove,
} = require("../controllers/controllerOfDog");
const { isValidDogId } = require("../middlewares");

const router = express.Router();
const jsonParser = express.json();

router.get("/", getAll);
router.get("/:dogId", isValidDogId, getById);
router.post("/", jsonParser, create);
router.put("/:dogId", isValidDogId, jsonParser, update);
router.patch("/:dogId/age", isValidDogId, jsonParser, chengeAge);
router.patch("/:dogId/height", isValidDogId, jsonParser, chengeHeight);
router.patch("/:dogId/weight", isValidDogId, jsonParser, chengeWeight);
router.delete("/:dogId", isValidDogId, remove);

module.exports = router;
