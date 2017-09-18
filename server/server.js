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

    socket.on('disconnect', () => {
      console.log('client has disconnected');
    });
});





app.get('/', (req, res) => {
  res.send("Hola mundo cruel");
})

server.listen(3000, () => {
  console.log(`Server started on port ${port}`)
})
