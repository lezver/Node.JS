const express = require("express");
const { readFile } = require("node:fs/promises");
const path = require("node:path");
const checkAuth = require("./middleware/check-auth");
const morgan = require("morgan");

const pathBooks = path.join(__dirname, "books.json");

const app = express();

const InternalServerError = "Internal server error.";

app.use("/books", morgan("combined"));

app.use("/books", checkAuth);

app.get("/", (req, res) => {
	try {
		res.send("Home");
	} catch (error) {
		console.error(error);
		res.status(500).send(InternalServerError);
	}
});

app.get("/books", async (request, response) => {
	try {
		const data = await readFile(pathBooks, "utf8");

		response.send(JSON.parse(data));
	} catch (error) {
		console.error(error);

		response.status(500).send(InternalServerError);
	}
});

app.listen(3333, () => {
	console.log("Server running on port: 3333");
});
