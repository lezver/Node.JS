const { WebSocketServer } = require("ws");

const wss = new WebSocketServer({ port: 3333 });

const clients = [];

wss.on("connection", (socket) => {
	clients.push(socket);

	for (const client of clients) {
		if (client === socket) {
			client.send("Welcome to Chat");
		} else {
			client.send("New user connected to Chat");
		}
	}

	socket.on("message", (message) => {
		const data = JSON.parse(message.toString("utf-8"));

		for (const client of clients) {
			if (client === socket) {
				client.send(`You: ${data.message}`);
			} else {
				client.send(`${data.name}: ${data.message}`);
			}
		}
	});
});

console.log("Server running on port 3333");
