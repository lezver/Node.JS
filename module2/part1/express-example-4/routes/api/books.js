const express = require("express");
const books = require("../../data");

const router = express.Router();

router.get("/", async (req, res) => {
	res.json(await books.getAll());
});

router.get("/:id", async (req, res) => {
	const { id } = req.params;
	res.json(await books.getById(id));
});

router.post("/", (req, res) => {
	res.json(books[0]);
});

router.put("/:id", (req, res) => {
	res.json(books[0]);
});

router.delete("/:id", (req, res) => {
	res.json(books[0]);
});

module.exports = router;
