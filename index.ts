var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a! New User Connected');
  socket.on('chat name', (name) => {
    io.emit('chat name', name);
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('a! User Disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});