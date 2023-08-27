const express = require("express");

const { getAll, getById, create, update, remove } = require("../controllers");

const router = express.Router();
const jsonParser = express.json();

router.get("/", getAll);

router.get("/:id", getById);

router.post("/", jsonParser, create);

router.put("/:id", jsonParser, update);

router.delete("/:id", remove);

module.exports = router;
