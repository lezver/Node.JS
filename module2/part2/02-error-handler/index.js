const express = require("express");
const routes = require("./routes");
const path = require("node:path");

const app = express();
const errorPath = path.join(__dirname, "./views/404.html");

app.get("/", async (req, res) => {
	res.send("Home");
});

app.use(routes);

app.use((req, res, next) => {
	res.status(404).sendFile(errorPath);
});

app.use((err, req, res, next) => {
	res.status(500).send("Internal Server Error");
});

app.listen(3333, () => {
	console.log("Server running on port: 3333");
});
