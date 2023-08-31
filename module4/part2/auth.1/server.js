const mongoose = require("mongoose");

const { DB_HOST } = process.env;

const app = require("./app");

mongoose.set("strictQuery", true);

mongoose
	.connect(DB_HOST)
	.then(() =>
		app.listen(6666, () =>
			console.log(
				"Database connection successful. Server running. Use port API on port: 6666"
			)
		)
	)
	.catch((err) => {
		console.error(err.message);

		process.exit(1);
	});
