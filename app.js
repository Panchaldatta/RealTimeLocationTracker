const express = require('express');;
const app=express();
const socketio=requires('socket.io');

const htttp = require('http');
const server = htttp.createServer(app);
const io = socketio(server);

app.set('view engine', 'ejs');
app.set(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
  res.send('Hello');
}); 

server.listen(3000);
