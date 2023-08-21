const fs = require("node:fs/promises");
const path = require("node:path");

const moviesPath = path.join(__dirname, "movies.json");
const read = async () =>
	JSON.parse(await fs.readFile(moviesPath, { encoding: "utf-8" }));
module.exports = { read };
