const express = require("express");
const { read } = require("./db");
const moment = require("moment");
const { appendFile } = require("node:fs/promises");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(async (req, res, next) => {
	const { method, url } = req;
	const data = moment().format("DD-MM-YYYY_hh:mm:ss");

	await appendFile("./server.log", `\n ${method} ${url} ${data}`);

	next();
});

app.get("/api", (req, res) => {
	res.send("<h2>Home</h2>");
});

app.get("/api/products", (req, res) => {
	res.json([]);
});

app.get("/api/books", async (req, res) => {
	const books = await read();

	res.json(books);
});

app.use((req, res, next) => {
	res.status(404).json({ message: "Not found" });
});

app.listen(3333, () => console.log("Server running on port: 3333"));
