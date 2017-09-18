const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;


const app = express();
var server = http.createServer(app)
var io = socketIO(server);
app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New user connected');

//this emiter goes from server to client
    socket.emit('newMessage', {
      from: 'Locos',
      text: 'Ok, loquillo te veo despues!',
      createdAt: 12123
    })

    socket.on('createMessage', (newMessage) => {
      console.log('From client: createMessage',newMessage);
    });

    socket.on('disconnect', () => {
      console.log('client has disconnected');
    });
});

server.listen(3000, () => {
  console.log(`Server started on port ${port}`)
})
