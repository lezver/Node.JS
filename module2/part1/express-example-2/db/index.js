const { readFile } = require("node:fs/promises");
const path = require("node:path");

const pathBooks = path.join(__dirname, "books.json");

const read = async () => JSON.parse(await readFile(pathBooks, "utf-8"));

module.exports = { read };
