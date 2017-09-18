
var socket = io();
socket.on('connect', function () {
  console.log('Connected to server');

  // this emiter goes from client to server
  // socket.emit('createMessage', {
  //   from: 'serginho',
  //   text: 'Yup, that works for me!'
  // });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('From server: newMessage: ' , message)
})
