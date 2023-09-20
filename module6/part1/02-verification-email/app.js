const express = require("express");
const logger = require("morgan");
const routes = require("./routes");
const path = require("node:path");

const app = express();

app.use(logger("dev"));

app.use("/avatar", express.static(path.join(__dirname, "public")));

app.use("/api", routes);

app.use((req, res) => res.status(404).json({ message: "Not found" }));

app.use((err, req, res, next) => {
	const { status = 500, message = "Internal server error" } = err;

	res.status(status).json({ message });
});

module.exports = app;
