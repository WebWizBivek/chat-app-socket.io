const socketHandler = (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected");
  });
};

module.exports = socketHandler;
