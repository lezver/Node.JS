const express = require("express");

const routes = require("./routes");

require("./db");

const app = express();

app.use("/api/books", routes);

app.use((req, res, next) => {
	res.status(404).send({ message: "Not Found" });
});

app.use((error, req, res, next) => {
	console.error(err);

	res.status(500), send({ message: "Internal Server Error" });
});

app.listen(3333, () => console.log("Server is running on port 3333"));
