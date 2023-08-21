import fs from "node:fs/promises";

fs.readFile("withMJS.mjs", { encoding: "utf-8" })
	.then((data) => console.log(data))
	.catch((err) => console.error(err));
