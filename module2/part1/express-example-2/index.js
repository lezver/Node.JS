const express = require("express");
const { read } = require("./db");

const app = express();
// const books = read().then(console.log).catch(console.error);

app.get("/api/books", async (req, res) => {
	const books = await read();
	// .then((data) => data)
	// .catch(console.error);

	res.json(books);

	// res.send(books);
});

app.listen(3333, () => console.log("Server running on port: 3333"));
