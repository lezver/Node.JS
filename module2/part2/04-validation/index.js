const express = require("express");
const crypto = require("node:crypto");

const bookSchema = require("./schemas/books");

const app = express();
const jsonParser = express.json();

app.post("/api/books", jsonParser, (req, res) => {
	const response = bookSchema.validate(req.body);

	if (typeof response.error !== "undefined") {
		return res.status(400).send("Validation Error");
	}

	const book = {
		title: req.body.title,
		author: req.body.author,
		pages: req.body.pages,
		id: crypto.randomUUID(),
	};

	res.status(200).send(book);
});

app.listen(3333, () => {
	console.log("Server running on port 3333");
});
