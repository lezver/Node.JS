const { readFile, writeFile } = require("node:fs/promises");
const path = require("node:path");

const pathBooks = path.join(__dirname, "books.json");

const read = async () => JSON.parse(await readFile(pathBooks, "utf-8"));

const getAll = async () => await read();

const getById = async (bookId) => {
	const books = await read();

	const foundBook = books.find((book) => book.id === bookId);

	return foundBook;
};

const create = async (book) => {};

module.exports = { getAll, getById };
