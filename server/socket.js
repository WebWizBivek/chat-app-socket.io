const userSocketMap = {};

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    socket.on("connected", (data) => {
      userSocketMap[data.userMail] = socket.id;
      console.log("connected user with their socket id are : ", userSocketMap);
    });

    // userSocketMap[email] = socket.id;
    console.log(socket.id, "connected");
    console.log("New client connected");
  });
};

module.exports = socketHandler;
