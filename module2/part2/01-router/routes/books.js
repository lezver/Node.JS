const { readFile } = require("node:fs/promises");
const path = require("node:path");
const express = require("express");

const router = express.Router();
const booksPath = path.join(__dirname, "../data/books.json");

const read = async () => JSON.parse(await readFile(booksPath, "utf8"));

const InternalError = "Internal server error";

// GET /books
router.get("/", async (req, res) => {
	try {
		const data = await read();

		res.send(data);
	} catch (error) {
		console.error(error);

		res.status(501).send(InternalError);
	}
});

// GET /book
router.get("/:id", async (req, res) => {
	const { id } = req.params;

	try {
		const data = await read();

		const foundBook = data.find((book) => id === book.id);

		res.send(foundBook);
	} catch (error) {
		console.error(error);

		res.status(501).send(InternalError);
	}
});

module.exports = router;
