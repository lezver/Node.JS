const { readFile, writeFile } = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

const BOOKS_PATH = path.join(__dirname, "books.json");

const read = async () =>
	JSON.parse(await readFile(BOOKS_PATH, { encoding: "utf-8" }));

const write = (data) => writeFile(BOOKS_PATH, JSON.stringify(data, null, 2));

const getAll = async () => await read();

const getById = async (id) => {
	const books = await read();

	const book = books.find((book) => book.id === id);

	return book || null;
};

const createBook = async (book) => {
	const books = await read();

	const createBook = { ...book, id: crypto.randomUUID() };

	books.push(createBook);

	await write(books);

	return createBook;
};

const updateBook = async (id, book) => {
	const books = await read();

	const indexBook = books.findIndex((book) => book.id === id);

	if (indexBook === -1) return null;

	books[indexBook] = { id, ...book };

	await write(books);

	return books[indexBook];

	// const newBooks = [
	// 	...books.slice(0, indexBook),
	// 	{ ...book, id },
	// 	...books.slice(indexBook + 1),
	// ];

	// return { ...book, id };
};

const removeBook = async (id) => {
	const books = await read();

	const newBooks = books.filter((book) => book.id !== id);

	await write(newBooks);

	return "Success";
};

module.exports = {
	getAll,
	getById,
	createBook,
	updateBook,
	removeBook,
};
