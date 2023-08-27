const BookSchema = require("../models");

const getAll = async (req, res, next) => {
	try {
		const books = await BookSchema.find().exec();

		return res.status(201).send(books);
	} catch (error) {
		next(error);
	}
};

const getById = async (req, res, next) => {
	const { id } = req.params;

	try {
		const foundBook = await BookSchema.findById(id).exec();

		if (foundBook === null) {
			return res.status(404).send({ message: "Not found" });
		}

		return res.status(201).send(foundBook);
	} catch (error) {
		next(error);
	}
};

const create = async (req, res, next) => {
	const book = {
		title: req.body.title,
		author: req.body.author,
		genre: req.body.genre,
		year: req.body.year,
	};
	try {
		const bookChecked = await BookSchema.create(book);

		return res.status(201).send(bookChecked);
	} catch (error) {
		next(error);
	}
};

const remove = async (req, res, next) => {
	const { id } = req.params;

	try {
		const removedBook = await BookSchema.findByIdAndRemove(id).exec();

		if (removedBook === null) {
			return res.status(404).send({ message: "Not found" });
		}
		return res.status(201).send({ message: "Success" });
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	const { id } = req.params;

	const book = {
		title: req.body.title,
		author: req.body.author,
		genre: req.body.genre,
		year: req.body.year,
	};

	try {
		const updateBook = await BookSchema.findByIdAndUpdate(id, book, {
			new: true,
		}).exec();

		if (updateBook === null) {
			return res.status(404).send({ message: "Not found" });
		}

		return res.status(201).send(updateBook);
	} catch (error) {
		next(error);
	}
};

module.exports = { getAll, getById, create, update, remove };
