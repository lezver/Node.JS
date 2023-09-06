const express = require("express");
const multer = require("multer");
const path = require("node:path");
const crypto = require("node:crypto");
const { rename } = require("node:fs/promises");

const app = express();

app.use(express.json());

const tmpDir = path.join(__dirname, "tmp");
const publicDir = path.join(__dirname, "public");

const multerConfig = multer.diskStorage({
	destination: tmpDir,
	filename: (req, file, cb) => cb(null, file.originalname),
});

const upload = multer({
	storage: multerConfig,
});

const books = [];

app.get("/api/books", (req, res) => {
	return res.status(200).send(books);
});

// upload.fields([{name:"avatar",maxCount:1},{name:"subAvatar",maxCount: 3}])
// upload.array("avatar",8)

app.post("/api/books", upload.single("avatar"), async (req, res) => {
	await rename(
		req.file.path,
		path.join(__dirname, "public", req.file.filename)
	);
	const cover = path.join("public", req.file.originalname);
	const newBook = {
		id: crypto.randomUUID(),
		...req.body,
		cover,
	};

	await books.push(newBook);
	return res.status(201).send(newBook);
});

app.listen(3333);
