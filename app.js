const express = require('express');
const app = express();
const socketio = require('socket.io');
const path = require('path');

const http = require('http');
const server = http.createServer(app);
const io = socketio(server);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('A user connected');
});

app.get('/', (req, res) => {
  res.render('Index', { title: 'Socket.IO Example' });
});

server.listen(3000);
