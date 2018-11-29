const express = require('express');
 
const app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('public'));

io.on('connection', function (socket) {
  console.log(socket);
  socket.on('update1pos', function (data) {
    console.log("update1pos");
  });
  
  socket.on('update2pos', function (data) {
    console.log("update2pos");
  });
  
});
