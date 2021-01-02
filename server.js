const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Run when client connects
io.on('connection', socket => {
    // Welcome current user
    socket.emit('message', 'Welcome To Hyper');

    // Runs when a client disconnects
    socket.on('disconnect', () => {
        io.emit('message', 'A user has left the chat');
    });
});


const port = 3000 || process.env.port;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.listen(port, () => {
    console.log('Example app listening on port ' + port + '.');
});