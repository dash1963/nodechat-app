const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateLocationMessage} = require('./utils/message');
const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;


const app = express();
var server = http.createServer(app)
var io = socketIO(server);
app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('New user connected');


    socket.emit('newMessage',
           generateMessage('Admin','Welcome to the Chat App!!'));


    socket.broadcast.emit('newMessage',
          generateMessage('Admin', 'New user joined!!'));



    socket.on('createMessage', (message, callback) => {
      console.log('From client: createMessage',message);
      io.emit('newMessage', generateMessage(message.from, message.text));
      callback('This is from server');
   });

   socket.on('createLocationMessage', (coords) => {
     io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude ))
   })

    socket.on('disconnect', () => {
      console.log('client has disconnected');
    });
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
