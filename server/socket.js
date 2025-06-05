const userSocketMap = {}

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    // userSocketMap[email] = socket.id;
    console.log(socket.id, "connected");
    console.log("New client connected");
  });
};

module.exports = socketHandler;
