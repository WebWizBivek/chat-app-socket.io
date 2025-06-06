const express = require("express");
const cors = require("cors");
const { createServer } = require("node:http");
const socketHandler = require("./socket.js"); // Assuming you have a socket handler file
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./db");
connectDB(); // Connect to MongoDB
const app = express();
//route imports
const userRoutes = require("./routes/userRoutes");
const upload = require("./multer/multer"); // Import multer configuration
const server = createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
socketHandler(io); // Initialize socket.io with the handler
app.use(cors());
app.use(express.json());

// Define routes
app.use("/api/user", userRoutes);

app.post("/api/upload", upload.single("file"), (req, res) => {
  // Handle file upload here
  res.send(req.file.buffer);
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
