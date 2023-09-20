const http = require("node:http");
const { Server } = require("socket.io");
const express = require("express");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.get("/ping", (req, res) => {
	res.send({ message: "pong" });
});

io.on("connection", (socket) => {
	socket.emit("chatInfo", "Welcome to Chat");
	socket.broadcast.emit("chatInfo", "New user connected to Chat");

	socket.on("chatMessage", (message) => {
		const data = JSON.parse(message);

		socket.emit("chatMessage", `You: ${data.message}`);
		socket.broadcast.emit("chatMessage", `${data.name}: ${data.message}`);
	});
});

server.listen(3333, () => console.log("Server is running on port 3333"));
