import fs from "node:fs/promises";

fs.readFile("withoutMJS.js", { encoding: "utf-8" })
	.then((data) => console.log(data))
	.catch((err) => console.error(err));
