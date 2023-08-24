// require("dotenv").config();

const { MongoClient } = require("mongodb");

const DB_URI = process.env.DB_URI;

const client = new MongoClient(DB_URI);

const run = async () => {
	try {
		await client.connect();
		await client.db("admin").command({ ping: 1 });

		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} catch (error) {
		console.error(error);
	} finally {
		await client.close();
		console.log("Client is closed.");
	}
};

run();
