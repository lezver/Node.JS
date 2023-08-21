const express = require("express");

const app = express();

app.get("/api", (req, res) => {
	res.send("<h2>Home Page</h2>");
});

app.get("/api/contacts", (req, res) => {
	res.send("<h2>Contacts Page</h2>");
});

app.listen(3333, () => console.log("Server running on port: 3333!"));
