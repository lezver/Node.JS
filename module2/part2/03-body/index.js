const express = require("express");

const app = express();
const jsonParser = express.json();

app.post("/api/books", jsonParser, (req, res) => {
	console.log(req.body);

	res.end();
});

app.listen(3333, () => {
	console.log("Server running on port 3333");
});
