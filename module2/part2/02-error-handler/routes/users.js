const { readFile } = require("node:fs/promises");
const path = require("node:path");
const express = require("express");

const router = express.Router();
const usersPuth = path.join(__dirname, "../data/users.json");
const InternalError = "Internal server error";

const read = async () => JSON.parse(await readFile(usersPuth, "utf8"));

// GET /users
router.get("/", async (req, res, next) => {
	try {
		const data = await read();

		res.send(data);
	} catch (error) {
		next(error);
	}
});

// POST /user
router.get("/:id", async (req, res, next) => {
	const { id } = req.params;

	try {
		const data = await read();

		const foundUseer = data.find((user) => id === user.id);

		res.send(foundUseer);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
