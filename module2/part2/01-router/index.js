const express = require("express");
const routes = require("./routes");

const app = express();

app.get("/", async (req, res) => {
	res.send("Home");
});

app.use(routes);

app.listen(3333, () => {
	console.log("Server running on port: 3333");
});
