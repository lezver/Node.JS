// require("dotenv").config();

const DB_URI = process.env.DB_URI;

const mongoose = require("mongoose");

mongoose
	.connect(DB_URI)
	.then(console.log("Database connected."))
	.catch((err) => console.error(err.message));
