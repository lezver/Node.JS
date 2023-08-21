const http = require("node:http");
const server = http.createServer((request, response) => {
	const { url, method } = request;

	if (method === "GET" && url === "/") {
		return response.end("Home");
	} else if (method === "GET" && url === "/movies") {
		response.end("Movies");
	}

	response.statusCode === 404;
	response.end("Not Found");
});

server.listen(3333, () => {
	console.log("Server running on port 3333");
});
