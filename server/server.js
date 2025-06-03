const express = require('express');
const { createServer } = require('node:http');

const app = express();
const server = createServer(app);
const {Server}= require('socket.io');
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
console.log('a user connected');
console.log(socket.id);

});



app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});