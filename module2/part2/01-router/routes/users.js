const { readFile } = require("node:fs/promises");
const path = require("node:path");
const express = require("express");

const router = express.Router();
const usersPuth = path.join(__dirname, "../data/users.json");
const InternalError = "Internal server error";

const read = async () => JSON.parse(await readFile(usersPuth, "utf8"));

// GET /users
router.get("/", async (req, res) => {
	try {
		const data = await read();

		res.send(data);
	} catch (error) {
		console.error(error);

		res.status(501).send(InternalError);
	}
});

// POST /user
router.get("/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const data = await read();

		const foundUseer = data.find((user) => id === user.id);

		res.send(foundUseer);
	} catch (error) {
		console.error(error);

		res.status(501).send(InternalError);
	}
});

module.exports = router;
