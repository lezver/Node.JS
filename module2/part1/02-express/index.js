const express = require("express");

const app = express();

app.get("/", (request, response) => {
	response.send("Home");

	console.log(request);
});

app.get("/movies", (req, res) => {
	res.send("Movies");
});

app.get("/movies/:id", (req, res) => {
	const { id } = req.params;

	res.send(`Movie: ${id}`);
});

app.post("/movies", (req, res) => {
	res.send("Create movie");
});

app.put("/movies/:id", (req, res) => {
	const { id } = req.params;

	console.log(req.params);

	res.send(`Update movie: ${id}`);
});

app.get("/movies/:movieId/reviews/:reviewId", (request, response) => {
	const { movieId, reviewId } = request.params;

	response.send(`Reviwe: ${reviewId}, for movie ${movieId}`);
});

app.listen(3333, () => {
	console.log("Server running on port 3333");
});
