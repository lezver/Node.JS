const express = require("express");
const app = express();
const router = express.Router();

// app.get("/contact", (req, res) => {
// 	res.send("<h1>Contact page</h1>");
// });
// app.get("/con?tact", (req, res) => {
// 	res.send("<h1>Contact page</h1>");
// });
// app.get("/con*tact", (req, res) => {
// 	res.send("<h1>Contact page</h1>");
// });

app.use((req, res, next) => {
	console.log("Our next PZ");
	next();
});

app.get("/contact/:id", (req, res) => {
	res.send(`<h1>Contact</h1> Parameter: ${req.params.id}`);
});

app.post("/login", (req, res, next) => {
	const { email, password } = req.body;
});

app.use(express.json());

app.all("/anything", (req, res, next) => {
	console.log("Anything nethod.");
	next();
});

app.listen(3333, () => {
	console.log("Exampe app listening on part 3333!");
});
