const express = require("express");
const cors = require("cors");
const booksRouter = require("./routes/api/books");

const app = express();

app.use(cors());

app.use("/api/books", booksRouter);

app.listen(3333, () => console.log("Server running on port: 3333"));
