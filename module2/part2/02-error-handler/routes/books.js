const { readFile } = require("node:fs/promises");
const path = require("node:path");
const express = require("express");

const router = express.Router();
const booksPath = path.join(__dirname, "../data/books.json");

const read = async () => JSON.parse(await readFile(booksPath, "utf8"));

// GET /books
router.get("/", async (req, res, next) => {
	try {
		const data = await read();

		res.send(data);
	} catch (error) {
		next(error);
	}
});

// GET /book
router.get("/:id", async (req, res, next) => {
	const { id } = req.params;

	try {
		const data = await read();

		const foundBook = data.find((book) => id === book.id);

		res.send(foundBook);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
