const foo = (a, b) => a + b;

console.log(foo(44, 33));

// const fs = require("node:fs");

console.log("before");

// fs.readFile("text.txt", { encoding: "utf-8" }, (err, data) => {
// 	if (err) throw err;

// 	console.log(data);
// });

// fs.promises
// 	.readFile("text.txt", {
// 		encoding: "utf-8",
// 	})
// 	.then((data) => console.log(data))
// 	.catch((err) => console.error(err));

// fs.promises
// 	.readFile("fasdf.txt", { encoding: "utf-8" })
// 	.then((data) => console.log(data))
// 	.catch((err) => console.error(err));

// /////////////////////////////////////////////////

const { readFile, writeFile, appendFile } = require("node:fs").promises;
// or
// const fs = require("node:fs/promises"); new

readFile("text.txt", { encoding: "utf-8" })
	.then((data) => console.log(data))
	.catch((err) => console.error(err));

// fs.writeFile("text.txt", JSON.stringify({ message: "Hellow Node.JS" }), {
// 	encoding: "utf-8",
// })
// 	// .then((data) => console.log(data))
// 	.catch((err) => console.error(err));

// console.log("after");

writeFile("test.txt", JSON.stringify({ message: "update file" }), {
	encoding: "utf-8",
}).catch((err) => console.error(err));

readFile("test.txt", { encoding: "utf-8" })
	.then((data) => console.log(data))
	.catch((err) => console.error(err));

appendFile("test.txt", "update test.txt file.\n", { encoding: "utf-8" })
	.then((data) => console.log(data))
	.catch((err) => console.error(err));
