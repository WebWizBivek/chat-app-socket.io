const express = require("express");
const { createServer } = require("node:http");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./db");
connectDB(); // Connect to MongoDB
const app = express();
const server = createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  // console.log(socket)
  console.log("a user connected");
  console.log(socket.id);
  socket.on("hello", (data) => {
    console.log(data);
  });
  socket.on("join_room", ({ name, room }) => {
    socket.join(room);
    console.log(`${name} joined ${room}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
