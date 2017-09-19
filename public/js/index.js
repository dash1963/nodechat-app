
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

// New message arriving
socket.on('newMessage', function(message) {
  console.log('From server: newMessage: ' , message)
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);

});


jQuery('#message-form').on('submit', function (e) {
  e.preventDefault();

  socket.emit('createMessage', {
    from: 'user',
    text: jQuery('[name=message]').val()
  }, function() {

  });
});
